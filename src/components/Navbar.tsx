import { Link } from "react-router-dom";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[80px] text-white bg-red-300 bg-neutral-red dark:bg-gray-700 py-3 dark:text-white">
      <h3>AliWert Store</h3>
      <Switch />
      <div>
        <Link to="/" className="mr-5">
          Home
        </Link>
        <Link to="/favorite">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
