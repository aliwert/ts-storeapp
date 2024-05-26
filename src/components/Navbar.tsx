import { Link } from "react-router-dom";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-3 h-[60px] text-white bg-gray-600">
      <h3>AliWert Store</h3>
      <div>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favorite">Favorites</Link>
        <Switch />
      </div>
    </div>
  );
};

export default Navbar;
