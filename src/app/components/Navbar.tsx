import { Lightswitch } from "./Lightswitch";

export const Navbar = () => {
    return (
        <nav className="flex justify-between p-2 bg-surface-50-950">
            <h1>HongKong</h1>
            <div className="-mr-4">
                <Lightswitch />
            </div>
        </nav>
    );
};
