import Link from "../Link/Link";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";



const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", label: "Home" },
        { id: 2, path: "/about", label: "About" },
        { id: 3, path: "/services", label: "Services" },
        { id: 4, path: "/contact", label: "Contact" },
        { id: 5, path: "/blog", label: "Blog" }
    ]

    return (

        <>

            <div onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdMenu className="text-3xl lg:hidden" ></MdMenu> : 
                    <AiOutlineClose className="text-3xl lg:hidden"></AiOutlineClose>
                }
            </div>



            <ul className="flex justify-center">

                {
                    routes.map(route => <li className="ml-8" key={route.id}><Link route={route}></Link></li>)
                }

            </ul>
        </>
    );
};

export default NavBar;