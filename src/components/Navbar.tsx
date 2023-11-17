import AppIcon from "./AppIcon";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="max-w-[1280px] w-full h-16 flex items-center justify-between">
      {/* App Icon */}
      <AppIcon />
      {/* Navlinks */}
      <Navlinks />
    </nav>
  );
};

export default Navbar;
