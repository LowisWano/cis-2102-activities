import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderIcon } from "lucide-react";

const ProtectedRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    try {
      const cachedToken = localStorage.getItem("token");
      
      if (!cachedToken) {
        setIsLoggedIn(false);
        setLoading(false)
        return;
      }
      const parsedToken = JSON.parse(cachedToken);
      setIsLoggedIn(true);
      setLoading(false)

    } catch (error) {
      console.log("Auth check failed:", error);
      setIsLoggedIn(false);
      setLoading(false)
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-20">
        <LoaderIcon />
      </div> 
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;