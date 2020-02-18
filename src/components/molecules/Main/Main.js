import React from 'react';
import './Main.scss';

import PropTypes from 'prop-types';
import SocialLinks from '../../atoms/SocialLinks/SocialLinks';


function Main({ content }) {
  return (
    <main className={`${content} wrapper`}>
      <SocialLinks />
      <div className="content">
        <p>lorem ipsum dolor sit amet </p>
        <p>{content}</p>
        <p>Plan your travel lick arm hair. Ask to go outside and ask to come inside and ask to go outside and ask to come inside headbutt owner's knee. Hunt by meowing loudly at 5am next to human slave food dispenser thug cat , good now the other hand, too or sniff sniff for stand in front of the computer screen. Meow meow mama my water bowl is clean and freshly replenished, so i'll drink from the toilet always ensure to lay down in such a manner that tail can lightly brush human's nose yowling nonstop the whole night. Touch my tail, i shred your hand purrrr ignore the human until she needs to get up, then climb on her lap and sprawl. I will ruin the couch with my claws eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter so scratch the postman wake up lick paw wake up owner meow meow annoy kitten brother with poking and litter box is life skid on floor, crash into wall . Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked sleeps on my head touch my tail, i shred your hand purrrr or lounge in doorway and chew on cable so bite off human's toes. If it fits, i sits stinky cat yet found somthing move i bite it tail so lay on arms while you're using the keyboard sleep but milk the cow. Meowzer licks your face sniff other cat's butt and hang jaw half open thereafter, sleep everywhere, but not in my bed. Cat not kitten around furrier and even more furrier hairball yet plop down in the middle where everybody walks yet destroy couch. Rub face on owner sit by the fire. Meow to be let out a nice warm laptop for me to sit on but mrow if it fits, i sits or eat all the power cords for cough hairball, eat toilet paper but chirp at birds. Pet me pet me pet me pet me, bite, scratch, why are you petting me. Head nudges stinky cat and rub my belly hiss refuse to leave cardboard box scratch me there, elevator butt yet lick the plastic bag crash against wall but walk away like nothing happened. Scratch me there, elevator butt your pillow is now my pet bed play time go into a room to decide you didn't want to be in there anyway. Attack the dog then pretend like nothing happened cat is love, cat is life intently stare at the same spot the door is opening! how exciting oh, it's you, meh, so destroy the blinds. Present belly, scratch hand when stroked i shredded your linens for you or ears back wide eyed eat and than sleep on your face. Tuxedo cats always looking dapper.</p>
      </div>
    </main>
  );
}

Main.propTypes = {
  content: PropTypes.string,
};

Main.defaultProps = {
  content: 'home',
};

export default Main;
