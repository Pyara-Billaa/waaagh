import { orkProfile } from "../../assets/images/images.js";
import Main from "../MainComponent.jsx";

export default function About() {
  return (
    <main>
      <article>
        <section className="p-4">
          <img className="w-45 rounded-full mb-8" src={orkProfile} alt="Orks" />
          <h1 className="font-bold text-3xl mb-4">
            What A Wonderful WAAAGH!!!!
          </h1>
          <p className="mb-8">
            Oi see boyz of green Red wartrukkz, too 'Umies go 'boom' For me an'
            you An' Oi fink to myself "What a wondaful WAAAGH!" Oi see Marines
            of blue An' bikes of white Dose beaky boyz they Sure know 'ow to
            fight An' Oi fink to myself, "What a wondaful WAAAGH!" Our stormboyz
            an' deffkoptas So orky in da sky Blast away da faces Of 'umies goin'
            by Oi see gits dyin' an' sayin' "What do we do?" An' dey'z all
            sayin' "Oh, I'm froo." Oi hear panzees cry Oi watch 'em explode
            Dey'll fight no more Cuz they was too slow Den Oi fink to myself,
            "What a wondaful WAAAGH!"
          </p>
          <strong>Ork Boyz</strong>
          <p className="mt-4 mb-8">
            Ork Boyz are the heart and soul of any Warband. They charge into
            battle in a great mass, crashing into the enemy like a green
            landslide. Bellowing with the joy of battle, mobs of Ork Boyz excel
            at close quarters where they can hack, bludgeon and stamp their foes
            into bloody ruin. The average Ork Boy is mean-tempered and
            exceptionally tough, more than compensating for his lack of
            intellect with a talent for violence. Though an Ork can cause plenty
            of damage with his fists, feet and forehead, it takes a lot to
            separate one from his favourite Choppa. When it comes to firearms,
            Orks love simplicity. They value noise and sheer weight of fire
            though so long as a gun can double as a decent club, its owner is
            usually happy enough. Some Greenskins will even get their hands on
            crude heavy weapons with which they can cause absolute havoc.
          </p>
        </section>
        <strong className="block text-center">Recent posts</strong>
        <Main />
      </article>
    </main>
  );
}
