import React, { useEffect, useState } from "react";
import { Link2, Pencil, Plus, Trash2 } from "lucide-react";
import blogsFallback from "../data/blogs";
import footerDetailsFallback from "../data/footerDetails";
import servicesFallback from "../data/services";
import {
  saveManagedContent,
  useManagedContent,
} from "../data/managedContent";
import "./ContentManagement.css";

const emptyFooterLinks = [];

const contentPaths = {
  blogs: "siteContent/blogs",
  solutions: "siteContent/solutions",
  footer: "siteContent/footerLinks",
  footerDetails: "siteContent/footerDetails",
};

const sectionDetails = {
  blogs: {
    title: "Manage Blogs",
    description: "Publish and remove articles shown on the public Blogs page.",
  },
  solutions: {
    title: "Manage Solutions",
    description: "Add or remove solutions shown on the site and their detail pages.",
  },
  footer: {
    title: "Manage Footer Links",
    description: "Add, edit, or remove links in the Solutions and Resources footer groups.",
  },
};

const emptyBlog = {
  title: "",
  category: "CCTV",
  date: new Date().toISOString().slice(0, 10),
  readTime: "5 min read",
  description: "",
  video: "",
};

const emptySolution = {
  title: "",
  shortDescription: "",
  intro: "",
  image: "",
  features: "",
  benefits: "",
  industries: "",
  products: "",
  faqs: "",
};

const emptyFooterLink = {
  group: "Solutions",
  label: "",
  path: "",
};

const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const linesToList = (value) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

function ContentManagement({ section }) {
  const blogContent = useManagedContent(contentPaths.blogs, blogsFallback);
  const solutionContent = useManagedContent(contentPaths.solutions, servicesFallback);
  const footerContent = useManagedContent(contentPaths.footer, emptyFooterLinks);
  const footerDetailsContent = useManagedContent(
    contentPaths.footerDetails,
    footerDetailsFallback
  );
  const content = {
    blogs: blogContent,
    solutions: solutionContent,
    footer: footerContent,
  }[section];
  const [blogForm, setBlogForm] = useState(emptyBlog);
  const [solutionForm, setSolutionForm] = useState(emptySolution);
  const [footerForm, setFooterForm] = useState(emptyFooterLink);
  const [footerDetailsForm, setFooterDetailsForm] = useState(footerDetailsFallback[0]);
  const [editingFooterId, setEditingFooterId] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const details = sectionDetails[section];
  const visibleItems = section === "footer"
    ? content.items.filter((item) => item.group !== "Company")
    : content.items;

  useEffect(() => {
    if (section === "footer" && footerDetailsContent.items[0]) {
      setFooterDetailsForm(footerDetailsContent.items[0]);
    }
  }, [footerDetailsContent.items, section]);

  const updateContent = async (nextItems) => {
    setSaving(true);
    setMessage("");

    try {
      await saveManagedContent(contentPaths[section], nextItems);
      content.setItems(nextItems);
      setMessage("Changes saved.");
      return true;
    } catch (error) {
      setMessage(error.message || "Unable to save changes. Check Firebase permissions.");
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (section === "blogs") {
      const nextBlog = {
        ...blogForm,
        id: `blog-${Date.now()}`,
        date: blogForm.date
          ? new Date(`${blogForm.date}T00:00:00`).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })
          : "",
      };

      if (await updateContent([nextBlog, ...content.items])) {
        setBlogForm({ ...emptyBlog, date: new Date().toISOString().slice(0, 10) });
      }
      return;
    }

    if (section === "solutions") {
      const slug = toSlug(solutionForm.title);

      if (content.items.some((item) => item.slug === slug)) {
        setMessage("A solution with that title already exists.");
        return;
      }

      const faqs = linesToList(solutionForm.faqs).map((line) => {
        const [question, ...answerParts] = line.split("|");
        return {
          question: question.trim(),
          answer: answerParts.join("|").trim(),
        };
      }).filter((faq) => faq.question && faq.answer);

      const nextSolution = {
        slug,
        title: solutionForm.title.trim(),
        shortDescription: solutionForm.shortDescription.trim(),
        intro: solutionForm.intro.trim(),
        image: solutionForm.image.trim(),
        features: linesToList(solutionForm.features),
        benefits: linesToList(solutionForm.benefits),
        industries: linesToList(solutionForm.industries),
        products: linesToList(solutionForm.products),
        faqs,
      };

      if (await updateContent([nextSolution, ...content.items])) {
        setSolutionForm(emptySolution);
      }
      return;
    }

    const nextLink = {
      ...footerForm,
      id: `footer-${Date.now()}`,
      label: footerForm.label.trim(),
      path: footerForm.path.trim(),
    };

    const nextLinks = editingFooterId
      ? content.items.map((item) => item.id === editingFooterId ? nextLink : item)
      : [...content.items, nextLink];

    if (await updateContent(nextLinks)) {
      setFooterForm(emptyFooterLink);
      setEditingFooterId("");
    }
  };

  const saveFooterDetails = async (event) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const nextDetails = [{
      ...footerDetailsForm,
      id: "footer-contact",
      address: footerDetailsForm.address.trim(),
      phone: footerDetailsForm.phone.trim(),
      email: footerDetailsForm.email.trim(),
    }];

    try {
      await saveManagedContent(contentPaths.footerDetails, nextDetails);
      footerDetailsContent.setItems(nextDetails);
      setMessage("Footer contact details saved.");
    } catch (error) {
      setMessage(error.message || "Unable to save footer contact details.");
    } finally {
      setSaving(false);
    }
  };

  const editFooterLink = (item) => {
    setFooterForm({ group: item.group, label: item.label, path: item.path });
    setEditingFooterId(item.id);
    setMessage("");
  };

  const deleteContent = async (id) => {
    if (!window.confirm("Delete this item from the website?")) return;
    await updateContent(content.items.filter((item) => item.id !== id && item.slug !== id));
  };

  const setBlogField = (field) => (event) =>
    setBlogForm((current) => ({ ...current, [field]: event.target.value }));
  const setSolutionField = (field) => (event) =>
    setSolutionForm((current) => ({ ...current, [field]: event.target.value }));

  return (
    <section className="content-manager">
      <header className="content-manager-header">
        <div>
          <h2>{details.title}</h2>
          <p>{details.description}</p>
        </div>
        <span>{visibleItems.length} items</span>
      </header>

      {content.error && (
        <p className="content-manager-message is-error" role="alert">
          Firebase could not load this content: {content.error}
        </p>
      )}
      {message && (
        <p className="content-manager-message" role="status">
          {message}
        </p>
      )}

      {section === "footer" && (
        <form className="content-manager-form" onSubmit={saveFooterDetails}>
          <h3>Footer Contact Details</h3>
          <label>
            Address / service locations
            <input
              value={footerDetailsForm.address}
              onChange={(event) => setFooterDetailsForm((current) => ({ ...current, address: event.target.value }))}
              required
            />
          </label>
          <div className="content-manager-form-row">
            <label>
              Contact number
              <input
                type="tel"
                value={footerDetailsForm.phone}
                onChange={(event) => setFooterDetailsForm((current) => ({ ...current, phone: event.target.value }))}
                placeholder="Enter the public contact number"
              />
            </label>
            <label>
              Contact email
              <input
                type="email"
                value={footerDetailsForm.email}
                onChange={(event) => setFooterDetailsForm((current) => ({ ...current, email: event.target.value }))}
                required
              />
            </label>
          </div>
          <button className="content-manager-submit" type="submit" disabled={saving || footerDetailsContent.loading}>
            {saving ? "Saving..." : "Save Contact Details"}
          </button>
        </form>
      )}

      <form className="content-manager-form" onSubmit={handleSubmit}>
        {section === "footer" && (
          <h3>{editingFooterId ? "Edit Footer Link" : "Add Footer Link"}</h3>
        )}
        {section === "blogs" && (
          <>
            <label>
              Article title
              <input value={blogForm.title} onChange={setBlogField("title")} required />
            </label>
            <div className="content-manager-form-row">
              <label>
                Category
                <input value={blogForm.category} onChange={setBlogField("category")} required />
              </label>
              <label>
                Publish date
                <input type="date" value={blogForm.date} onChange={setBlogField("date")} />
              </label>
              <label>
                Read time
                <input value={blogForm.readTime} onChange={setBlogField("readTime")} required />
              </label>
            </div>
            <label>
              Description
              <textarea value={blogForm.description} onChange={setBlogField("description")} rows="3" required />
            </label>
            <label>
              Video URL <span>(optional)</span>
              <input type="url" value={blogForm.video} onChange={setBlogField("video")} />
            </label>
          </>
        )}

        {section === "solutions" && (
          <>
            <label>
              Solution title
              <input value={solutionForm.title} onChange={setSolutionField("title")} required />
            </label>
            <label>
              Short description
              <textarea value={solutionForm.shortDescription} onChange={setSolutionField("shortDescription")} rows="2" required />
            </label>
            <label>
              Detail introduction
              <textarea value={solutionForm.intro} onChange={setSolutionField("intro")} rows="3" required />
            </label>
            <label>
              Image URL
              <input type="url" value={solutionForm.image} onChange={setSolutionField("image")} required />
            </label>
            <div className="content-manager-form-row">
              {[
                ["features", "Features"],
                ["benefits", "Benefits"],
                ["industries", "Industries served"],
                ["products", "Products"],
              ].map(([field, label]) => (
                <label key={field}>
                  {label} <span>(one per line)</span>
                  <textarea value={solutionForm[field]} onChange={setSolutionField(field)} rows="4" />
                </label>
              ))}
            </div>
            <label>
              FAQs <span>(one per line: question | answer)</span>
              <textarea value={solutionForm.faqs} onChange={setSolutionField("faqs")} rows="3" />
            </label>
          </>
        )}

        {section === "footer" && (
          <>
          {editingFooterId && (
            <div className="content-manager-editing">
              Editing footer link
              <button
                type="button"
                onClick={() => {
                  setEditingFooterId("");
                  setFooterForm(emptyFooterLink);
                }}
              >
                Cancel
              </button>
            </div>
          )}
          <div className="content-manager-form-row content-manager-form-row--footer">
            <label>
              Footer group
              <select
                value={footerForm.group}
                onChange={(event) => setFooterForm((current) => ({ ...current, group: event.target.value }))}
              >
                <option>Solutions</option>
                <option>Resources</option>
              </select>
            </label>
            <label>
              Link label
              <input
                value={footerForm.label}
                onChange={(event) => setFooterForm((current) => ({ ...current, label: event.target.value }))}
                required
              />
            </label>
            <label>
              Site path
              <input
                value={footerForm.path}
                onChange={(event) => setFooterForm((current) => ({ ...current, path: event.target.value }))}
                placeholder="/contact"
                pattern="/.*"
                title="Enter a site path beginning with /"
                required
              />
            </label>
          </div>
          </>
        )}

        <button className="content-manager-submit" type="submit" disabled={saving || content.loading}>
          <Plus size={17} />
          {saving
            ? "Saving..."
            : editingFooterId
            ? "Save Footer Link"
            : `Add ${section === "footer" ? "Footer Link" : section === "blogs" ? "Blog" : "Solution"}`}
        </button>
      </form>

      <div className="content-manager-list">
        {content.loading ? (
          <p className="content-manager-empty">Loading content...</p>
        ) : visibleItems.length === 0 ? (
          <p className="content-manager-empty">
            {section === "footer"
              ? "No footer links yet. Add one above to publish it."
              : "No items have been added."}
          </p>
        ) : (
          visibleItems.map((item) => (
            <article className="content-manager-item" key={item.id || item.slug}>
              <div>
                <strong>{item.title || item.label}</strong>
                <span>
                  {section === "footer"
                    ? `${item.group} · ${item.path}`
                    : section === "blogs"
                    ? `${item.category} · ${item.date}`
                    : item.slug}
                </span>
              </div>
              <div className="content-manager-item-actions">
                {section === "footer" && (
                  <button
                    type="button"
                    className="content-manager-edit"
                    title={`Edit ${item.label}`}
                    aria-label={`Edit ${item.label}`}
                    onClick={() => editFooterLink(item)}
                    disabled={saving}
                  >
                    <Pencil size={16} />
                  </button>
                )}
                <button
                  type="button"
                  className="content-manager-delete"
                  title={`Delete ${item.title || item.label}`}
                  aria-label={`Delete ${item.title || item.label}`}
                  onClick={() => deleteContent(item.id || item.slug)}
                  disabled={saving}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {section === "footer" && (
        <p className="content-manager-note">
          <Link2 size={15} /> Footer links are rendered in the selected group.
        </p>
      )}
    </section>
  );
}

export default ContentManagement;