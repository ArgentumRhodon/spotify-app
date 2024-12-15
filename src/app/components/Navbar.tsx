import Lightswitch from "./Lightswitch";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 bg-surface-50-950">
      <h1>HongKong</h1>
      <Lightswitch />
    </nav>
  );
};

export default Navbar;
