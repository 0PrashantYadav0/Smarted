import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }: { children: React.ReactNode; authentication?: boolean }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state: { auth: { status: boolean } }) => state.auth.status);

  useEffect(() => {
    if ((authentication && !authStatus) || (!authentication && authStatus)) {
      navigate(authentication ? "/login" : "/dashboard");
    } else {
      setLoader(false);
    }
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
