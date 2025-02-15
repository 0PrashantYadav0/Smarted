import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactNode } from "react";

export default function Protected({ children, authentication = true }: { children: ReactNode, authentication?: boolean }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  function isAuthenticated() {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("token")
    }
    return false
  }

  useEffect(() => {
    if (authentication && !isAuthenticated()) {
      navigate("/login");
    } else {
      setLoader(false);
    }
  }, [authentication, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}