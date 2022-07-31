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

const reportNumber = 42;
const startDate = '2022-07-31';
const endDate = '2022-08-30';
const submissionDate = '2022-08-31';

const citations = [
];
const citationsChange ='_____TODO_____';

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
  id: '3427',
  name: 'The Sinners are Puzzled',
  ends: '2022-10-02',
  units: 'members of Sin Squadron',
  notes: 'A Star Wars related puzzle will be released each Saturday. The pilots of Sin Squadron will have a week to complete each puzzle in the fastest time possible.',
  highlight: true,
}, 

{
  id: '3413',
  name: 'Warrior\'s Ace Pilot',
  ends: '2022-12-31',
  units: 'ISDII Warrior Pilots',
  notes: 'Pilots of the ISDII Warrior, we\'re looking for the Warrior\'s Ace Pilot in the form of who can achieve the highest score in a Star Wars Squadrons Dogfight.',
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
];

const combatEvents = [
{
  id: '191',
  name: '3PO League Season 5',
  ends: '2022-10-02',
  notes: '3 Players Only League (3PO League) brings the much loved Cadet Cup 3v3 format into a space where everyone can enjoy!',
}, 

{
  id: '190',
  name: 'SPL - Squadrons Premier League Season 5',
  ends: '2022-09-04',
  notes: 'The Squadrons Premier League is a weekly league for 5v5 Dogfighting in Star Wars: Squadrons',
}, 
];

const ACTIVITY = {
  // ------- Flight 1 -------
  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Hollow
  56313: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: '',
    flightActivity: '',
	otherActivity: '',
    notes: '',
  },
  
 // ------- Flight 2 -------
 // Talon Jade
  8512: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kane Polybius
  56085: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // AnArKey223
  56157: {
    communication: '',
    flightActivity: '',
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
  
  // ------- Flight 3 -------
  // Robert Hogan
  55859: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Ma'tikk Za'bezz
  56307: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Valkrus
  56316: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Exar Kit
  5243: {
    communication: '',
    flightActivity: '',
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
		
		<p>_____TODO_____</p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>_____TODO_____</li><br></br>

        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
		<ul>
				<li>_____TODO_____</li><br></br>

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
