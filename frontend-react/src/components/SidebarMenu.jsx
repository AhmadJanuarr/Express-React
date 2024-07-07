import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
export default function SidebarMenu() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const logout = () => {
    //remove token and user on cookies
    Cookies.remove("token");
    Cookies.remove("user");
    //assign false to state "isAuthenticated"
    setIsAuthenticated(false);
    // redirect to login
    navigate("/login", { replace: true });
  };
  return (
    <div className="card border-0 rounded shadow-sm">
      <div className="card-header">MAIN MENU</div>
      <div>
        <div className="card-body">
          <div className="list-group">
            <Link
              to="/admin/dashboard"
              className="list-group-item list-group-item-action"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="list-group-item list-group-item-action"
            >
              Users
            </Link>
            <a
              onClick={logout}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
