import { orkBoysImg } from "../assets/images/images.js";

export default function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${orkBoysImg})` }}
      className="bg-cover bg-center"
    >
      <article className="
      h-73.25 p-4 pr-6 flex flex-col justify-end max-w-162.5 cursor-pointer
      sm:h-100
      md:h-115
      lg:h-122 lg:p-10
      ">
        <span className="text-white text-xs text-shadow-[0px_2px_2px_rgba(0_0_0/1)]">Dakka Dakka Dakka</span>
        <h1 className="text-white font-bold text-3xl text-shadow-[0px_2px_2px_rgba(0_0_0/1)]">
          Ere We Go, 'Ere We Go, 'Ere We Go!
        </h1>
        <p className="text-white text-shadow-[0px_2px_2px_rgba(112_128_144/1)]">
          The Orks, also called Greenskins, are one of the most dangerous alien
          races to plague the galaxy. Numerous beyond belief and driven always
          to fight and conquer, the Orks threaten every single intelligent
          species of the galaxy.
        </p>
      </article>
    </header>
  );
}
