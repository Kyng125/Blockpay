
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { navLinks } from "@/constants/index";


const Navbar = () => {
    return (
    <nav className='w-[1289px] h-[50px] px-24 flex pt-[4px] justify-between items-center'>
        <Link href="./app/page">
            <Image src={""} alt="logo" />
        </Link>
        
        <ul className='list-none text-[20px] sm:flex hidden justify-end'>
            {navLinks.map((nav) => (
                <li key={nav.id} className="nav-text m-10 justify-end bg-hover">
                    <a href={`/${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

        <Button/>
    </nav>
    )
}

export default Navbar;