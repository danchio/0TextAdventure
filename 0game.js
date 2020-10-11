const draft = require('readline-sync');

let playerRoute = draft.question('INITIATE EXPIRIENCE \n ... \n ... \n THIS IS YOUR STORY \n ... \n ... \n A frigid cold slowly wakes you. You open your eyes to a moisture-laden cell. The bars are rusted, and the smell of mold pierces your senses. How do you approach?\n \n EMBRACE DESTINY \n \n ACCEPT FATE. \n');

const playerChoice = (option) => {
  if (option == 'EMBRACE DESTINY') {
     playerChoice2(); 
  } else if (option == 'ACCEPT FATE') {
      console.log('You ponder the futility of action. The idea weighs heavy of the realization that time is always fleeting. You understand the scope of the universe and your relation to that. You’ve accepted your end, and thusly are at peace. And as you lay there time passes, and passes, and passes, and passes\… \n GAME OVER');
  } else {
      console.log('Please cooperate with me, Im trying to narrate your story.');
  }

}

const playerChoice2 = () => {
  console.log('You muster your strength and decide you would like to see what destiny has brought you. Whether it be pride or turmoil, onward you press. As you rise to your feet your surroundings become clear. It seems to be a jail cell.  The walls around you are white as snow being brightened by the intense light looming above you. A metal door directly ahead of you and nothing else. Your first instinct propels you to it, and as you try the handle it opens to a hallway.  Doors on either side of you. How do you approach?\n');
  let playerRoute1 = draft.question('LEFT DOOR \n RIGHT DOOR\n')
  
  if (playerRoute1 == 'LEFT DOOR') {
    firstLeftDoor();
  } else if (playerRoute1 == 'RIGHT DOOR') {
    firstRightDoor();
  } else {
    console.log('Please cooperate with me, Im trying to narrate your story.')
  } 
  }


const firstRightDoor = () => {
  console.log('You approach the door to your right. You try the handle and it works. Through the door you find what seems to be a  laboratory. Earth surrounds you on all sides and you get the impression you’ve awaken somewhere deep underground. Electrical equipment surrounds you for as far as the eye can see, and as you scan something catches your eye. A jewel, shining bright, encased in a jar on a desk. How do you approach?')
  let playerRoute2 = draft.question('TAKE JEWEL \n LEAVE IT \n')

  if (playerRoute2 == 'TAKE JEWEL') {
    console.log('You figure that you can just pocket it. Why shouldn’t you, you are player 1. It belongs to you. But as you wrap your grimy hands around it you feel something. \n Your vision goes blank, your senses go numb, and you feel everything fade. Still standing, incoherent and babbling. The whispers begin and they are booming in your ears.\n\“An offering to the old one.\” \n \“An offering to the old one.\” \n \“An offering to the old one.\” \n \“An offering to the old one.\” \nGAMEOVER')
  } else if (playerRoute2 == 'LEAVE IT') {
    playerChoice3();
  } else {
    console.log('Please cooperate with me, Im trying to narrate your story.');
  }
}

const playerChoice3 = () => {
  console.log('You decide it’s not worth your attention. You need to find a way out and you’re determined to do so. Onward you press, as you scower the lab and try to find your route. You can see many servers blinking lights dancing across their surface. Desks all around. You get the sense that whatever they were researching down here, it was a large team that was doing that research. On the the other side of the room a door awaits you. You approach it and open it. On the other side a hallway. Long windows spanning the size of the hall on either side and what seems to be workstations beyond them. Two doors located in the middle on either side. How do you approach?')
  let playerRoute3 = draft.question('LEFT DOOR \nRIGHT DOOR\n')
    
  if (playerRoute3 == 'LEFT DOOR') {
    console.log('You enter the door on your left sure of your decision. The door slides open and instantly you get a sense of relief. You\’re not sure why but something is bringing you peace. You find yourself in a brewery, a hoppy scent in the air. You find a fridge across the room with a see-through door, and the other side  filled to the brim with beer cans labeled \“You Win Brews.\” You decide you deserve a treat.. and a buzz.. You approach the fridge, open the door, and grab a cold one. You pop the can open and take a big swig. Suddenly, you feel a jolt, not painful, but surprising nonetheless. Your vision goes blank and you feel faint for a second. You reconstitute yourself but you feel something wrapped around your head and your vision is still blank. \“Did you enjoy the experience Mr. USER REDACTED?\” It takes you a second to process the noise. \“Mr USER REDACTED, are you okay?\” You don\’t remember putting the goggles on, but you put your hands on your head and you feel them. \“When did I get here?\” \“Who are you?\” The Voice starts to fade and your senses with it.  And you fade, and you fade, and you fade, and you fade\… \n THE END')
  } else if (playerRoute3 == 'RIGHT DOOR'){
    console.log('Not sure if you’re making the right decision, you enter the door on the right. Immediately a wave of despair hits you. As you walk through the door you see nothing but earth on all sides of you, but what does catch your eyes are the markings. You can hear whispers, but you’re not sure of the source. As if it were written in chalk, sigils line the walls on all sides as well as scribbles and sayings. The phrases “THE OLD ONE LIVES” “Submit your soul” & “He is everything and nothing” stand out to you particularly. You enter further and chills shoot down your spine. Paralyzed. You feel yourself trapped and all your senses dull. At first you see the tendrils manifesting right before your eyes. As if from thin air long tentacles start to form. You cannot believe what you’re seeing as a weight in your gut drops and your heart begins to pound. Then a body becomes clear, a  scaly, rubbery-looking body, prodigious claws on hind and fore feet, and long, narrow wings behind. Then the old ones face connecting to the tentacles that are now wrapped around your entire body. The whispers become shrieks and you can feel nothing but fear. The old one approaches you and envelops you in darkness…. \n GAME OVER')
  } else {
    console.log('Please cooperate with me, Im trying to narrate your story.');
  }
}


const firstLeftDoor = () => {
  console.log('You walk through the door on the left and you find yourself outside. Sun is shining in the sky, there aint a cloud in sight. You find yourself feeling full of cheer as you take in your surroundings. A bench in front of you, right before a never-ending stretch of road. Grass on either side for what seems like miles and miles. The skyline painted with hills of green. How do you approach?')
  let playerRoute4 = draft.question('SIT \nFOllOW')

  if (playerRoute4 == 'SIT') {
    console.log("You decide to rest your feet and take in the scenery and why not? You\’ve no reason to not enjoy such a beautiful day. That\’s right you deserve to take all the time in the world, and just sit there. Mhm, just sit there all day. Why put any more effort into advancing the story when you can just put it on pause for an indefinite period of time. You are player 1 after all right?… \nGAME OVER")
  } else if (playerRoute4 == 'FOLLOW') {
    playerChoice4();
  } else {
    console.log('Please cooperate with me, Im trying to narrate your story.');
  }
}

const playerChoice4 = () => {
  console.log('“You decide to follow the road! This nice weather and beautiful view entices you to take a stroll. You follow it, and you follow it, and you follow it, and as you follow it you see something. After what feels like hours of following the path you come to a shed. It seems to be rather new as it were recently built. How do you approach?”')
  let playerRoute2 = draft.question('GO IN \nDO NOT')

  if (playerRoute2 == 'DO NOT') {
    console.log('Why would you ignore the call to action. Do you not know how stories work. It won’t progress without you, we’re trying to write your story here. Will you please cooperate? You know what, nope. Im not doing it anymore. Im not gonna keep putting effort in narrating your story if you’re not gonna cooperate. We\'re done here. \nGAMEOVER')
  } else if (playerRoute2 == 'GO IN') {
    finalChoice();
  } else {
    console.log('Please cooperate with me, Im trying to narrate your story.');
  }
}


const finalChoice = () => {
  console.log('A call to action, and you are there to answer! You approach the door and you go through without a second thought. Charging through the door you see nothing but darkness as you enter. Not as if there were a lack of light, but if you had just stepped into a void. You wonder what you’ve just gotten yourself into as you start to backtrack on coming in here in the first place. How do you approach?')
  let playerRoute2 = draft.question('EMBRACE THE VOID \nTURN AROUND')

  if (playerRoute2 == 'EMBRACE THE VOID') {
    console.log('You decide that whatever the future holds, fate is on your side so you embrace the dark. Walking further into it. Your thoughts start to wander as you walk though the abyss. You walk and walk and walk, and start to wonder if you’ll reach anything ever. The absolute nothingness of the space around you consumes your mind as you try to wrap your head around the idea the void in front of you. And you walk, and you walk, and you walk, and you walk, and you walk…')
  } else if (playerRoute2 == 'TURN AROUND') {
    console.log('You turn around and decide that you’ve decided it was the wrong decision, but as you do, you see that your surroundings have changed. Instead of the field of green you grew fond of, you are greet by blanks nothingness. Just white space. You turn back around to check if you can get back in the shed but its gone when you look. Replacing it more white space. You’ve reached nothing itself. You look around and try to comprehend where you are and what you’ve gotten yourself into… ')
  } else {
    console.log('Please cooperate with me, Im trying to narrate your story.');
  }
}


playerChoice(playerRoute);

const playAgain = () => {
  let playAgain = draft.question('Do you want to play again? y || n \n');
  playAgain = playAgain.toLowerCase();
  if (playAgain === 'y') {
     let playerReroute = draft.question('INITIATE EXPIRIENCE \n ... \n ... \n THIS IS YOUR STORY \n ... \n ... \n A frigid cold slowly wakes you. You open your eyes to a moisture-laden cell. The bars are rusted, and the smell of mold pierces your senses. How do you approach?\n \n EMBRACE DESTINY \n \n ACCEPT FATE. \n');
      playerChoice(playerReroute);
  } else {
    console.log('Thanks for playing.\nGoodbye.');
  }
};