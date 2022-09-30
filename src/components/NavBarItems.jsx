import { Link } from "react-router-dom";
const NavBarItems = () => {

const randomN = Math.ceil(Math.random()*20)

    return(
        <div className="flex w-screen items-center justify-center">
            <ul className="flex flex-row text-center justify-center items-center">
                <li><Link to={"/"}><span className="mx-2 px-3 py-1 rounded-lg text-black font-semibold transition-all hover:bg-black hover:text-white">Clase 04</span></Link></li>
                <li><Link to={"/clase-05"}><span className="mx-2 px-3 py-1 rounded-lg text-black font-semibold transition-all hover:bg-black hover:text-white">Clase 05</span></Link></li>
                <li><Link to={"/clase-06"}><span className="mx-2 px-3 py-1 rounded-lg text-black font-semibold transition-all hover:bg-black hover:text-white">Clase 06</span></Link></li>
                </ul>
        </div>
    )
}

export default NavBarItems