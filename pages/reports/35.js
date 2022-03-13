/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import CombatEvents from '../../components/combatEvents';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 35;
const startDate = '2022-02-27';
const endDate = '2022-03-12';
const submissionDate = '2022-03-13';

const citations = [
];
const citationsChange ='+0';

// These don't seem to change anything. Use: citations.js 
const orders = [
];

const competitions = [
{
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: '2022-04-01',
  units: 'TIE Corps',
  notes: 'A MP event for the whole TC where 3-person teams (with up to 3 additional subs) will sign up by January 20 and take part in 3v3 fleet battles in Star Wars Squadrons.',
  highlight: true,
},

{
  id: '3363',
  name: 'TIE Corps in Battle Season Four',
  ends: '2022-05-08',
  units: 'Entire TC',
  notes: 'One battle each from TIE, XvT, and XWA will be assigned monthly (10th to the 10th). Pilots will fly the battles and submit their pilot files through the database normally. One battle each from TIE, XvT, and XWA will be assigned monthly. Pilots will fly the battles and submit their pilot files through the database normally. ',
}, 

{
  id: '3359',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, 

{
  id: '3358',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, 

{
  id: '3360',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most single player missions played.',
},

{
  id: '3356',
  name: 'The Challenge With Words',
  ends: '2022-03-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly medals for the quickest time to complete a word search. March\'s word search can be found at https://mywordsearch.com/593186/Species2',
},

{
  id: '3354',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'A crossword puzzle where every month a new crossword puzzle will be created with a specific theme. 1. Make sure to read the Test Details fully. 2. The URL to the crossword is listed in Question 1 on the test. IT IS NOT A HYPERLINK. You have to copy/paste it into your URL bar. 3. Once you hit Begin Test, we can\'t do anything for you if you encounter issues.  Make sure you understand what you need to do and PM me if you have any questions. Your monthly placement will be determined by the order in which 100% complete submissions are received. March\'s crossword can be found at https://tc.emperorshammer.org/timetest.php?testid=5b2d19ce52',
},

{
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'Every month a new puzzle will be announced and pilots will compete for the best time with medals up for grabs for the top 6 fastest pilots as well as points accrued. March\'s jigsaw can be found at https://www.jigsawplanet.com/?rc=play&pid=38aa3022e180',
},

{
  id: '3368',
  name: 'Legion\'s Challenging Time Trials Season 3',
  ends: '2022-06-01',
  units: 'Entire TC',
  notes: 'The goal of this competition is to kill LegionX in a 1v1 "Dogfight" as quickly as you can in Star Wars Squadrons.',
},
];

const combatEvents = [
{
  id: '170',
  name: 'COO\'s Saturday Star Wars Shootouts',
  ends: '2022-06-05',
  notes: 'Online PvP every Saturday at 6pm EST (11pm UTC). A member of the Combat Operations Office organize one or more groups. The game played will be determined by the pilots online. Ten games played will earn you an IS-CW.',
}, 
];

const ACTIVITY = {
  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP',
    otherActivity: 'Challenge with Words, Crossword Challenge, Jigsaw Puzzle Extravaganza',
    notes: '',
  },
  
  // Ivan Hordiyanko
  56220: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP & PvE',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'SP (TIE/XvT/XWA)',
    otherActivity: '',
    notes: 'Amazing SP flying again! Well done!',
  },

  // Earnim Branet
  11276: {
    communication: '',
    flightActivity: '',
	otherActivity: '',
    notes: '',
  },
  
  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Battlefront PvP',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Sin Sqn RP Channel',
    notes: '',
  },
  
  // AnArKey223
  56157: {
    communication: '',
    flightActivity: '',
    otherActivity: 'Squadrons PvP',
    notes: '',
  },
  
   // Valario Valent
  56234: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'SP (XvT)',
    otherActivity: '',
    notes: '',
  },

  // AlexanderK9
  56110: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Giada Aurelious
  56247: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Welcome to Sin!',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.PIN]) {
      return { ...ad, ...additionalActivityData[ad.PIN] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>
	  
        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Commander's Speech</span></h4></center>
		
		<p>Greetings pilots! Sorry for the lack of a report last week. Real life threw me a curve ball last week, as it does sometimes, which hogged a lot more of my time than I would have liked but we’re back up and running again this week! </p>
		<p>This week we welcome our 12th pilot! Yes, Sin is at maximum capacity and we warmly welcome SL Giada Aurelious to our ranks. </p>
		<p>February is well and truly behind us now and my recommendations for Feb’s MSEs are with command.  </p>
		<p>In the wider fleet we saw Sin squadron take all three top spots in the Kill Boards for February! Congratulations and a very well done to all!  <br></br> We also see LC Taygetta stepping down as Epsilon Squadron’s commander.  </p>
		<p>Find this and plenty more, in the news sections below. </p>



      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>In a stunning effort during February, Sin Squadron managed to take all three top spots on the Single Player, Multiplayer and Cooperative kill boards. With such a fantastic turnout and effort, I would like to thank you all for our hard work and activity! What an amazing result.</li><br></br>
				<li>Sin Squadron welcomes its 12th pilot, SL Giada Aurelious! We warmly greet you and wish you every success in your career! SL Giada Aurelious was recruited by LCM Kane Polybius who earns himself a Medal of Instruction! Congrats!</li><br></br>
				<li>Sintoxicated, our Chalquilla Cup 2 team, has struggled to get any rounds played over the last week and is preparing for a double header this weekend. It’s key that the team get these rounds in less we risk having to forfeit the rounds.</li><br></br>
				<li>February’s MSE (Monthly Squadron Evaluation) recommendations have been submitted and are awaiting approval from command. </li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
				<li>Earlier this week LC Taygetta informed the HamCOM that he plans to step back from the Epsilon CMDR position due to RL commitments.  <br></br>
				Firstly, a big thank you to Tay for all he’s done - being a CMDR is quite the ride. He will be staying on until we identify a suitable replacement. <br></br>
				If you are interested in a CMDR position, please drop VA Phoenix Berkana a email - only prerequisite is SM/5 (or a plan to take it ASAP), ideas on how to take the Squadron forward and a drive to succeed. The brand-new TIE Corps website and database went live Sunday morning. This represents a huge effort by many of our members to overhaul our website and to bring in some much sought-after improvements! Go ahead and check it out! A huge thanks goes to the Internet Office and its staff for some amazing work!
				</li><br></br>
				<li>TIE Corps in Battle assignments for March have gone live:</li><br></br>

                <li><b>TIE Corps in Battle Season 4 Assignments for March:</b> 
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=304&type=info"> TIE-TC 132: Battle of the Bins</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=937&type=info"> XvT-TC 61: Operation Cotton Candy</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=394&type=info"> XWA-IW 2: Rion's Shadow Campaign: Infiltrate Rion</a>
				</li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />
	  
	  <CombatEvents combatEvents={combatEvents} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
	  
		<p>My door is always open to all of you. If you need any help, guidance or just direction for some activities then please don’t hesitate to contact me on Discord of by email. If you’re online and gaming, drop in to one of our voice channels for visibility. You never know you might end up flying with some fellow Sinners or other members of the Corps.</p>
		<p>For Sin! </p>
		<p>MAJ SkyShadow </p>

      <i><span style={{ color: "#bb0a1e" }}>"The old ones say we Sinners are descended from the Emperor himself. From the time a Sinner could fly, they were baptized in the fire of combat. 
        Taught never to retreat, never to surrender. Taught that death on the battlefield in service to the Empire was the greatest glory they could achieve."</span></i>
		
      </Closing>

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData },
  };
}
