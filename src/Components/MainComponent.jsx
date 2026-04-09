import {
  gorkMorkImg,
  gazghkull,
  grimskull,
  snagrod,
  tuska,
  gorgutz,
  beast,
  orks,
} from "../assets/images/images.js";

export default function Main() {
  return (
    <main className="bg-[#FAFAFA]">
      <section
        className="
      grid grid-cols-1 gap-12 p-4 mt-3
      sm:grid-cols-2 sm:gap-[60px_20px]
      md:gap-10
      lg:p-10
      xl:grid-cols-3
      2xl:grid-cols-4
      "
      >
        <figure className="h-92">
          <img
            className="h-58 w-full rounded-sm"
            src={gorkMorkImg}
            alt="gork and mork with open mouth"
          />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Deities</span>
            <h2 className="font-bold text-2xl">Gork and Mork</h2>
            <p>
              Gork and Mork are the gods of the Orks, the fathers of the
              WAAAGH!. Gork is brutal but kunnin' and Mork is kunnin' but
              brutal. What more is there to say? Look at them wrong and they'll
              kick yer teef in.
            </p>
          </figcaption>
        </figure>

        <figure className="h-92">
          <img
            className="h-58 w-full rounded-sm"
            src={gazghkull}
            alt="Warboss Ghazghkull"
          />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Ghazghkull Mag Uruk Thraka</span>
            <h2 className="font-bold text-2xl">Ghazghkull Thraka</h2>
            <p>
              Ghazghkull Thraka is an Ork warlord of the Goff klan and a mighty
              prophet of the WAAAGH!. He is the single most influential Ork in
              the galaxy in the 41st Millennium, and billions of Greenskins
              march to war in his name.
            </p>
          </figcaption>
        </figure>

        <figure className="h-92">
          <img
            className="h-58 w-full rounded-sm"
            src={grimskull}
            alt="Warboss Grimskull"
          />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Warboss Grimskull</span>
            <h2 className="font-bold text-2xl">Grimskull</h2>
            <p>
              Grimskull was the Ork Warboss who led the massive Ork invasion of
              the Imperial Forge World of Graia by the million-Greenskin strong
              WAAAGH! Grimskull that initiated the Liberation of Graia campaign
              in the late 41st Millennium.
            </p>
          </figcaption>
        </figure>

        <figure
          className="
        hidden h-92
        sm:block
        "
        >
          <img
            className="h-58 w-full rounded-sm"
            src={snagrod}
            alt="Warboss Snagrod"
          />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Arch-arsonist of Charadon</span>
            <h2 className="font-bold text-2xl">Gork and Mork</h2>
            <p>
              The Ork Warlord Snagrod, united the warring Ork factions bordering
              the Loki Sector and launched the largest WAAAGH! attacking the
              isolated Imperial Agri-world of Badlanding in mid-989.M41.
            </p>
          </figcaption>
        </figure>

        <figure
          className="
        hidden h-92
        sm:block
        "
        >
          <img
            className="h-58 w-full rounded-sm"
            src={tuska}
            alt="Warboss tuska"
          />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Daemon-Killa</span>
            <h2 className="font-bold text-2xl">Tuska</h2>
            <p>
              Tuska, who styled himself the "Daemon-Killa", is the Ork warlord
              who is the leader of an Ork WAAAGH! that currently battles
              eternally before the Brass Citadel, the heart of Khorne's domain
              in the Realm of Chaos in the Warp.
            </p>
          </figcaption>
        </figure>

        <figure
          className="
        hidden h-92
        sm:block
        "
        >
          <img className="h-58 w-full rounded-sm" src={gorgutz} alt="Gorgutz" />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Gorgutz 'Ead 'Unter</span>
            <h2 className="font-bold text-2xl">Gorgutz</h2>
            <p>
              Gorgutz is an Ork warlord, originally a warboss of the Evil Sunz
              klan, who was involved in three major campaigns against the
              military forces of the Imperium of Man and most of the other major
              intelligent species of the galaxy during the final century of the
              41st Millennium.
            </p>
          </figcaption>
        </figure>

        <figure
          className="
        hidden h-92
        2xl:block
        "
        >
          <img className="h-58 w-full rounded-sm" src={beast} alt="The Beast" />
          <figcaption className="cursor-pointer">
            <span className="text-xs">The war of the Beast</span>
            <h2 className="font-bold text-2xl">The Beast</h2>
            <p>
              The Beast, was a massive Ork WAAAGH! of extraordinary size that
              threatened Terra itself in the mid-32nd Millennium and brought an
              end to the prosperous period of Imperial history remembered as the
              "Time of Rebirth." It was led by the mysterious Warboss known only
              as "The Beast.
            </p>
          </figcaption>
        </figure>

        <figure
          className="
        hidden h-92
        2xl:block
        "
        >
          <img className="h-58 w-full rounded-sm" src={orks} alt="Orks" />
          <figcaption className="cursor-pointer">
            <span className="text-xs">Philosophy</span>
            <h2 className="font-bold text-2xl">Ork philosophy</h2>
            <p>
              Orks have but one philosophy: might makes right. They believe that
              the weak must suffer the rule of the strong. Over the countless
              millennia in which the Greenskins have waged their wars, not one
              Ork has ever doubted this for a single moment.
            </p>
          </figcaption>
        </figure>
      </section>
      <strong
        className="
        block text-xs underline text-center mt-8 mb-8 cursor-pointer
        sm:mt-15
        "
      >
        View More
      </strong>
    </main>
  );
}
