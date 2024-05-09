import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 px-4">
            <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl text-white font-bold">Loan Application</span>
            </Link>
            {/* <Link href="/login" className="text-white hover:underline font-bold pr-15">
                Login
            </Link> */}
        </nav>
      );
}

export default Navbar;