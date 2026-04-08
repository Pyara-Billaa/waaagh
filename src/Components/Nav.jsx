import { orkLogo } from "../assets/images/images.js";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="
    h-14.75 p-[0px_16px] flex justify-between items-center
    lg:p-[0px_30px]
    "
    >
      <figure className="flex items-center gap-1 cursor-pointer">
        <Link to="/"><img className="w-12" src={orkLogo} alt="ork logo" /></Link>
        <strong className="text-xl"><Link to="/">WAAAAAGH</Link></strong>
      </figure>
      <ul className="flex gap-8 font-bold cursor-pointer">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
