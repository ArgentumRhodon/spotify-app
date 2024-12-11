import { Lightswitch } from "./Lightswitch";

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 bg-surface-50-950">
      <h1>HongKong</h1>
      <Lightswitch />
    </nav>
  );
};
