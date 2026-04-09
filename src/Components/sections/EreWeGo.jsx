import { orkBoysImg } from "../../assets/images/images.js";
import Main from "../MainComponent.jsx";

export default function EreWeGo() {
  return (
    <article className="bg-[#FAFAFA]">
      <section className="
      p-4 
      lg:p-10
      2xl:px-80
      ">
        <div className="
        lg:min-w-230 lg:pl-5 lg:pr-5
        xl:px-15
        ">
          <span className="block text-xs mb-4 mt-4">Dakka Dakka Dakka</span>
          <h1 className="text-3xl font-bold mb-4">
            Ere We Go, 'Ere We Go, 'Ere We Go!
          </h1>
          <p>
            The Orks, also called Greenskins, are one of the most dangerous
            alien races to plague the galaxy. Numerous beyond belief and driven
            always to fight and conquer, the Orks threaten every single
            intelligent species of the galaxy.
          </p>
        </div>
        <img
          className="mt-8 mb-8 max-h-122 rounded-sm w-full"
          src={orkBoysImg}
          alt="Orks"
        />
        <div className="
        lg:min-w-230 lg:pl-5 lg:pr-5
        xl:px-15
        ">
          <strong className="block mb-4">Gathering the WAAAGH!</strong>
          <p className="mb-4">
            First and foremost amongst all of the Orkoid instincts is the
            literal need for an Ork to wage war. Orks need war just as a Human
            or Aeldari needs food and water and over the long millennia of their
            existence the Greenskins have become very, very good at it.
          </p>
          <p className="mb-4">
            Due to their inherently aggressive nature, Orks constantly fight
            amongst themselves to prove who is the strongest, sharpening their
            in-born warrior skills and weeding out the weak, though this process
            usually poses little threat to the larger galaxy.
          </p>
          <strong className="block mb-4">The Great WAAAGH!</strong>
          <p className="mb-4">
            This rise in new WAAAGH!s has been most notable around Warp space
            anomalies and regions plagued by Warp Storms, with hundreds of
            Greenskin invasion forces emerging from these areas every Terran
            year.
          </p>
          <p className="mb-8">
            The Orks' foes can only watch in horrified bewilderment as the
            phenomenon known as the Great WAAAGH! sees the Greenskins flooding
            across the galaxy in numbers never before witnessed, slaughtering
            everything in their path as they go.
          </p>
        </div>

        <strong className="block text-center">Recent posts</strong>
      </section>
      <Main />
    </article>
  );
}
