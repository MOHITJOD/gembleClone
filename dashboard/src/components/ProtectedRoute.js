import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { API_BASE_URL } from "../config";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { setUsername } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const { data } = await axios.post(
          `${API_BASE_URL}/auth/`,
          {},
          config
        );
        
        const { status, user } = data;
        setIsAuthenticated(status);
        
        if (status && user) {
          setUsername(user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyAuth();
  }, [navigate, setUsername]);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.5rem',
        color: '#666'
      }}>
        Loading...
      </div>
    );
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
