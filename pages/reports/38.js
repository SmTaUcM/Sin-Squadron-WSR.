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

const reportNumber = 38;
const startDate = '2022-04-10';
const endDate = '2022-04-23';
const submissionDate = '2022-04-24';

const citations = [
];
const citationsChange ='+0';

// These don't seem to change anything. Use: citations.js 
const orders = [
];

const competitions = [
{
  id: '3384',
  name: 'Sinfantry Training - Season 2',
  ends: '2022-09-30',
  units: 'members of Sin Squadron',
  notes: 'Every first and third Saturday of the month, Sin Squadron will assemble for PvP and CoOp matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
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
  id: '3354',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'A crossword puzzle where every month a new crossword puzzle will be created with a specific theme. 1. Make sure to read the Test Details fully. 2. The URL to the crossword is listed in Question 1 on the test. IT IS NOT A HYPERLINK. You have to copy/paste it into your URL bar. 3. Once you hit Begin Test, we can\'t do anything for you if you encounter issues.  Make sure you understand what you need to do and PM me if you have any questions. Your monthly placement will be determined by the order in which 100% complete submissions are received. April\'s crossword can be found at https://tc.emperorshammer.org/timetest.php?testid=a787ff5775',
},

{
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'Every month a new puzzle will be announced and pilots will compete for the best time with medals up for grabs for the top 6 fastest pilots as well as points accrued. April\'s jigsaw can be found at https://www.jigsawplanet.com/?rc=play&pid=26cd7aebebf7',
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
    flightActivity: 'Star Conflict PvP & PvE',
    otherActivity: '',
    notes: '',
  },
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'TIE & XvT Single Player',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: '',
    flightActivity: 'Star Conflict PvE',
	otherActivity: '',
    notes: '',
  },
  
  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP, Squadrons PvE',
    otherActivity: '',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // AnArKey223
  56157: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },
  
   // Valario Valent
  56234: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
 // Ivan Hordiyanko
  56220: {
    communication: 'Discord',
    flightActivity: 'Battlefront II PvP',
    otherActivity: '',
    notes: '',
  },
  
  // X
  56282: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Giada Aurelious
  56247: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
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
		
		<p>Greetings pilots! Imperial Storm 4 (IS4) rages on and remains anyone’s game at this point. One of the big TIE Corps competitions of the year, IS4 pitches the ISDII Hammer, Challenge and Warrior against one another in a pseudo table-top game of strategy where each ship will encounter battles against one another. Keep your eyes peeled on Discord for news announcements and strategy discussions. And as always, be prepared for battle, there’ll be plenty more to come! </p>
		<p>Sin welcomes its newest pilot, SL X to its ranks this week. We warmly welcome you and look forward to flying with you soon X! </p>
		<p>We’ve also seen some internal transfers/promotions over the last two weeks which sees us congratulating LCM Ivan Hordiyanko who has taken up the role of Flight 3 Leader! Congratulations in your new role, and we wish you every success in your new position!</p>
		<p>MAJ Wreckage has moved over to a Flight Member slot in Flight 1. </p>
		<p> And sadly, we have lost LCM AlexanderK9 to the abyss. We hope that you return to us soon. </p>
		<p>Sin along with the rest of the ISDII Warrior squadrons has also been nominated to test out a new structure, and has expanded to 4 Flights. This means that we now have a new vacancy for a Flight Leader. If you’re interested in learning the ropes of command and being responsible for a flight of pilots then please submit your interest to me. </p>
		<p>Finally, it’s with great pleasure that I can announce the return of Sinfantry Training! An internal Sin competition which sees Sin’s pilots grouping up over two training nights a week to enjoy some PvP and PvE gaming as a Squadron.</p>
		<p>Find this and plenty more, in the news sections below. </p>



      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>SL X joins us here a Sin Squadron as Sin 3-2! We warmly welcome you to the squad!</li><br></br>
				<li>LCM Ivan Hordiyanko has been promoted to Flight Leader of Flight 3.</li><br></br>
				<li>MAJ Wreckage has assumed the role of Flight Member over in Flight 1.</li><br></br>
				<li>Sadly, we have lost LCM AlexanderK9 to the abyss whilst on a patrol. We hope that he can find his way back to us in the future.</li><br></br>
				<li>Sin Squadron is trialling a new 4 Flight squadron structure which means we’ll be seeing even more new pilots shortly. This has also generated a new Flight Leader position. If anyone is interested in becoming a Flight Leader and getting a taste of command in the TIE Corps then please apply directly to me.</li><br></br>
				<li>Sinfantry Training has returned! Every first and third Saturday of the month, Sin Squadron will assemble for PvP and CoOp matches in Star Wars Squadrons, Battlefront, and Star Conflict. See more at <a href="https://tc.emperorshammer.org/competitions.php?id=3384">  here</a>.</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>

		<ul>
				<li>Imperial Storm 4 rages on, and all is up for grabs across all three Star Destroyers! Find the latest SIMS report <a href="https://tc.emperorshammer.org/showreport.php?id=4188">  here </a>.</li><br></br>
				<li>Theta Squadron onboard the ISDII Warrior is still looking for a new Squadron Commander (CMDR). After a long-standing and successful career, GN Pete "Tex" Mitchell has decided he wants to trade his desk in for the cockpit again, this leaves Theta without a CMDR. So, the hunt is on! If you would like the opportunity to take over Theta, DM the WarCOM, VA Marenta, your interest and include any relevant EHTC experience, leadership examples (online or irl), and what you hope to do to keep Theta successful and active.</li><br></br>
				<li>Field Test: Larger Squadrons<br></br><br></br>As the ISDII Warrior was on its way to reaching its hard cap of 48 pilots between 4 squadrons, VA Marenta and HA Plif discussed how we wanted to address that on the roster. Rather than pulling an experienced officer from a squadron to lead a newly-formed squadron and then doing the usual redirection of every recruit to the new squadron, we're trying out a different path. To let a talented leadership team have more pilots to work with and to ease the pressure the roster puts on us to open new squadrons, we've decided to test increasing the maximum number of pilots in a squadron to 16. This will be limited to the four squadrons on the ISDII Warrior for now but may expand to the other ships later on. <br></br><br></br>The way we chose to increase the max size of a squadron was to add a fourth flight to each of them. This creates an additional Flight Leader position and three additional Flight Member positions in each squadron. <br></br><br></br>The immediate concern is that this would cause balance issues in any competitions that have a squadron component like TIE Corps in Battle, Squadron (Re)Mobilization, and Raise the Flag. We're far enough into the TCiB season that this shouldn't cause a significant impact in the final standings, especially since it takes time to recruit pilots and get them flying. For the other competitions, we have an additional variable to consider when putting together the rules for this year's iterations. <br></br><br></br>Since this is a test, this new structure isn't yet permanent. We'll be keeping in touch with the CMDRs of the affected squadrons and getting their feedback as time passes. If we reach a point where it's clear that larger squadrons have some unintended drawbacks, we'll revert to the 12-pilot max and reassign pilots as needed. We'll also be working with the Commodores of the ISDII Hammer and ISDII Challenge to determine if an increase to the max size of the other squadrons is warranted.</li><br></br>

                <li><b>TIE Corps in Battle Season 4 Assignments for April:</b> 
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=794&type=info">  TIE-TC 199: Shinsen Gumi Saga #1: The School For Scandal </a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=1369&type=info"> XvT-TC 134: Engines of War </a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=402&type=info"> XWA-IW 3: Rion's Shadow Campaign: Seeds of Corruption </a>
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
