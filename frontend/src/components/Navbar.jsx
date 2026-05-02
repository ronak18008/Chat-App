<<<<<<< HEAD
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
    const { authUser, logout } = useAuthStore();
    return (
    <header
       className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40
       backdrop-blur-lg lg-base-100/80"
       >
        <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">


            </div>
            </div>
       
    </header>
    );
};
export default Navbar;
=======
const Navbar = () => {
    return <div>Navbar</div>;
};
export default Navbar;
>>>>>>> 1cd6977db022cba0cb00637bb2aafa1e5639a0cf
