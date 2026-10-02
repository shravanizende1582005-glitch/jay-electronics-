import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../Firebase";

export function useManagedContent(path, fallback) {
  const [items, setItems] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onValue(
      ref(db, path),
      (snapshot) => {
        const value = snapshot.val();

        if (value?.initialized === true) {
          setItems(Array.isArray(value.items) ? value.items : []);
        } else {
          setItems(fallback);
        }

        setError("");
        setLoading(false);
      },
      (databaseError) => {
        setError(databaseError.message || "Unable to load managed content.");
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [fallback, path]);

  return { items, setItems, loading, error };
}

export function saveManagedContent(path, items) {
  return set(ref(db, path), {
    initialized: true,
    items,
  });
}