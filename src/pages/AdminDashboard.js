import React, { useEffect, useState } from "react";
import {
  ref,
  onValue,
  remove,
  update
} from "firebase/database";

import {
  LogOut,
  Users,
  Mail,
  Phone,
  Trash2,
  Search,
  RefreshCw,
  Eye,
  X,
  BookOpen,
  Layers3,
  Link2
} from "lucide-react";

import { db, auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ContentManagement from "./ContentManagement";

import "./AdminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState("enquiries");

  const viewDetails = {
    enquiries: {
      title: "Contact Enquiries",
      description: "Manage enquiries received from the JEPL website.",
    },
    blogs: {
      title: "Blogs",
      description: "Add and remove public articles.",
    },
    solutions: {
      title: "Solutions",
      description: "Manage public solutions and their detail pages.",
    },
    footer: {
      title: "Footer Links",
      description: "Manage links shown in the website footer.",
    },
  };

  useEffect(() => {

    const enquiryRef = ref(db, "contactEnquiries");

    const unsubscribe = onValue(enquiryRef, (snapshot) => {

      const data = snapshot.val();

      if (data) {

        const enquiryList = Object.entries(data).map(
          ([id, value]) => ({
            id,
            ...value
          })
        );

        enquiryList.sort(
          (a, b) =>
            new Date(b.submittedAt || 0) -
            new Date(a.submittedAt || 0)
        );

        setEnquiries(enquiryList);

      } else {

        setEnquiries([]);

      }

      setLoading(false);
    });

    return () => unsubscribe();

  }, []);

  const handleLogout = async () => {

    await signOut(auth);

    navigate("/admin/login");
  };

  const deleteEnquiry = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {

      await remove(
        ref(db, `contactEnquiries/${id}`)
      );

    } catch (error) {

      console.error(error);

      alert("Unable to delete enquiry.");

    }
  };

  const changeStatus = async (id, status) => {

    try {

      await update(
        ref(db, `contactEnquiries/${id}`),
        {
          status
        }
      );

    } catch (error) {

      console.error(error);

      alert("Unable to update status.");
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {

    const searchText = search.toLowerCase();

    return (
      item.name?.toLowerCase().includes(searchText) ||
      item.email?.toLowerCase().includes(searchText) ||
      item.mobile?.toLowerCase().includes(searchText) ||
      item.company?.toLowerCase().includes(searchText) ||
      item.service?.toLowerCase().includes(searchText)
    );

  });

  const totalEnquiries = enquiries.length;

  const newEnquiries = enquiries.filter(
    (item) => !item.status || item.status === "New"
  ).length;

  const contactedEnquiries = enquiries.filter(
    (item) => item.status === "Contacted"
  ).length;

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}

      <aside className="admin-sidebar">

        <div className="admin-logo">

          <div className="admin-logo-icon">
            J
          </div>

          <div>
            <strong>JEPL</strong>
            <span>Admin Panel</span>
          </div>

        </div>

        <nav>
          <button
            className={activeView === "enquiries" ? "admin-nav-active" : "admin-nav-button"}
            onClick={() => setActiveView("enquiries")}
          >
            <Users size={19} /> Contact Enquiries
          </button>
          <button
            className={activeView === "blogs" ? "admin-nav-active" : "admin-nav-button"}
            onClick={() => setActiveView("blogs")}
          >
            <BookOpen size={19} /> Blogs
          </button>
          <button
            className={activeView === "solutions" ? "admin-nav-active" : "admin-nav-button"}
            onClick={() => setActiveView("solutions")}
          >
            <Layers3 size={19} /> Solutions
          </button>
          <button
            className={activeView === "footer" ? "admin-nav-active" : "admin-nav-button"}
            onClick={() => setActiveView("footer")}
          >
            <Link2 size={19} /> Footer Links
          </button>
        </nav>

        <button
          className="admin-logout"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </button>

      </aside>


      {/* MAIN CONTENT */}

      <main className="admin-main">

        <header className="admin-header">

          <div>

            <h1>{viewDetails[activeView].title}</h1>

            <p>
              {viewDetails[activeView].description}
            </p>

          </div>

          {activeView === "enquiries" && (
            <button
              className="admin-refresh"
              onClick={() => window.location.reload()}
            >
              <RefreshCw size={17} />
              Refresh
            </button>
          )}

        </header>

        {activeView === "enquiries" ? (
          <>

        {/* STATISTICS */}

        <section className="admin-stats">

          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Users size={22} />
            </div>

            <div>
              <span>Total Enquiries</span>
              <strong>{totalEnquiries}</strong>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Mail size={22} />
            </div>

            <div>
              <span>New Enquiries</span>
              <strong>{newEnquiries}</strong>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Phone size={22} />
            </div>

            <div>
              <span>Contacted</span>
              <strong>{contactedEnquiries}</strong>
            </div>

          </div>

        </section>


        {/* SEARCH */}

        <section className="admin-table-card">

          <div className="admin-table-toolbar">

            <div>

              <h2>Customer Enquiries</h2>

              <span>
                {filteredEnquiries.length} records
              </span>

            </div>

            <div className="admin-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search name, email, mobile..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>


          {/* TABLE */}

          {loading ? (

            <div className="admin-loading">
              Loading enquiries...
            </div>

          ) : filteredEnquiries.length === 0 ? (

            <div className="admin-empty">
              <Users size={40} />
              <h3>No enquiries found</h3>
              <p>
                Contact enquiries submitted from the website
                will appear here.
              </p>
            </div>

          ) : (

            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>

                  <tr>

                    <th>Name</th>
                    <th>Contact</th>
                    <th>Service</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {filteredEnquiries.map((item) => (

                    <tr key={item.id}>

                      <td>

                        <div className="admin-customer">

                          <div className="customer-avatar">
                            {item.name
                              ? item.name.charAt(0).toUpperCase()
                              : "U"}
                          </div>

                          <div>

                            <strong>
                              {item.name || "Unknown"}
                            </strong>

                            <span>
                              {item.company || "Individual"}
                            </span>

                          </div>

                        </div>

                      </td>


                      <td>

                        <div className="admin-contact">

                          <a href={`tel:${item.mobile}`}>
                            {item.mobile}
                          </a>

                          <a href={`mailto:${item.email}`}>
                            {item.email}
                          </a>

                        </div>

                      </td>


                      <td>
                        {item.service || "-"}
                      </td>


                      <td>
                        {item.location || "-"}
                      </td>


                      <td>

                        {item.submittedAt
                          ? new Date(
                              item.submittedAt
                            ).toLocaleDateString("en-IN")
                          : "-"}

                      </td>


                      <td>

                        <select
                          className={`status-select ${
                            item.status === "Contacted"
                              ? "status-contacted"
                              : item.status === "Closed"
                              ? "status-closed"
                              : "status-new"
                          }`}
                          value={item.status || "New"}
                          onChange={(e) =>
                            changeStatus(
                              item.id,
                              e.target.value
                            )
                          }
                        >

                          <option value="New">
                            New
                          </option>

                          <option value="Contacted">
                            Contacted
                          </option>

                          <option value="Closed">
                            Closed
                          </option>

                        </select>

                      </td>


                      <td>

                        <div className="admin-actions">

                          <button
                            className="view-button"
                            title="View"
                            onClick={() =>
                              setSelectedEnquiry(item)
                            }
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            className="delete-button"
                            title="Delete"
                            onClick={() =>
                              deleteEnquiry(item.id)
                            }
                          >
                            <Trash2 size={17} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

          </>
        ) : (
          <ContentManagement section={activeView} />
        )}

      </main>


      {/* VIEW MODAL */}

      {selectedEnquiry && (

        <div className="admin-modal-overlay">

          <div className="admin-modal">

            <div className="admin-modal-header">

              <div>
                <h2>Enquiry Details</h2>
                <span>
                  Customer information
                </span>
              </div>

              <button
                onClick={() =>
                  setSelectedEnquiry(null)
                }
              >
                <X size={20} />
              </button>

            </div>


            <div className="admin-modal-body">

              <div className="detail-row">
                <strong>Name</strong>
                <span>
                  {selectedEnquiry.name || "-"}
                </span>
              </div>

              <div className="detail-row">
                <strong>Company</strong>
                <span>
                  {selectedEnquiry.company || "-"}
                </span>
              </div>

              <div className="detail-row">
                <strong>Mobile</strong>
                <span>
                  {selectedEnquiry.mobile || "-"}
                </span>
              </div>

              <div className="detail-row">
                <strong>Email</strong>
                <span>
                  {selectedEnquiry.email || "-"}
                </span>
              </div>

              <div className="detail-row">
                <strong>Location</strong>
                <span>
                  {selectedEnquiry.location || "-"}
                </span>
              </div>

              <div className="detail-row">
                <strong>Service</strong>
                <span>
                  {selectedEnquiry.service || "-"}
                </span>
              </div>

              <div className="detail-row">
                <strong>Project Type</strong>
                <span>
                  {selectedEnquiry.projectType || "-"}
                </span>
              </div>

              <div className="detail-row detail-message">
                <strong>Message</strong>
                <p>
                  {selectedEnquiry.message || "-"}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminDashboard;