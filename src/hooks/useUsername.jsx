import { useState, useEffect, useCallback } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export function useUsername() {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsername = useCallback(async (user) => {
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUsername(userDoc.data().username);
      } else {
        setUsername(null);
      }
    } catch (err) {
      console.error("Error fetching username:", err);
      setUsername(null);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUsername(user).finally(() => setLoading(false));
      } else {
        setUsername(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [fetchUsername]);

  return { username, loading };
}
