import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h3>layout</h3>
      <Link to="ss">ss</Link>
      <Outlet />
    </div>
  );
};
export default Layout;
