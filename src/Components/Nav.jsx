import { orkLogo } from "../assets/images/images.js";

export default function Nav() {
  return (
    <nav className="
    h-14.75 p-[0px_16px] flex justify-between items-center
    lg:p-[0px_30px]
    ">
      <figure className="flex items-center gap-1 cursor-pointer">
        <img className="w-12" src={orkLogo} alt="ork logo" />
        <strong className="text-xl">WAAAAAGH</strong>
      </figure>
      <ul className="flex gap-8 font-bold cursor-pointer">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
