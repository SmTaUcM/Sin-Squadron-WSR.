/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 21;
const startDate = '2021-11-21';
const endDate = '2021-11-28';
const submissionDate = '2021-11-28';

const citations = [
  'XvT-TC 14',
  'XvT-TC 70',
  'XWA-TC 1',
  'XWA-TC 2', 
];
const citationsChange ='-5';

// These don't seem to change anything. Use: citations.js 
const orders = [{
  name: 'TIE-TC 3',
  id: 3,
  title: 'New Dimensions',
}, {
  name: 'TIE-TC 10',
  id: 10,
  title: 'Battle for the Death Star',
}, {
  name: 'TIE-TC 16',
  id: 16,
  title: 'Dacian Downfall',
}, {
  name: 'TIE-TC 19',
  id: 19,
  title: 'The Tethys Honeymoon',
}, {
  name: 'TIE-TC 30',
  id: 30,
  title: 'Save the Emperors Archives',
}, {
  name: 'TIE-TC 153',
  id: 390,
  title: 'Koph Supremacy Project',
}];

const competitions = [{
  id: '3321',
  name: 'Sinfantry Training',
  ends: '2022-02-05',
  units: 'Sin Squadron',
  notes: 'Every first Saturday of the month, Sin Squadron will assemble for PvP matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
  highlight: true,
}, {
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
}, {
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most single player missions played.',
}];

// TODO confirm
const ACTIVITY = {
  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE and PvP',
    otherActivity: 'IOA Duties, Trivia Grand Tour, Wiki Updates',
    notes: '',
  },
  
  // Leone123
  56159: {
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
  
  // Robert Hogan
  55859: {
    communication: 'Discord, E-Mail',
    flightActivity: '',
    otherActivity: 'IU Course Development',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Battlefront II PvP',
    otherActivity: 'Transferred to Sin 2-3',
    notes: 'Thank you for everything that you have done as our CMDR',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
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
		
        <p>Greetings Pilots! Here goes my first report as Sin Squadron Commander. </p>
		<p>First and foremost, I would like to extend a huge thank you to MAJ Wreckage for the fantastic job that he did serving as our squadron commander over the last four, very competition intense months. Without his leadership and inspiration, I’m sure that we wouldn’t be the brilliant squadron that we are now. I’d also like to say congratulations for achieving your goal of earning your dream job role and I wish you every success in your new career. </p>
		<p>I am incredibly honoured to have been selected to follow in his footsteps and I’m extremely proud to be serving as your CMDR. </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>MAJ Wreckage has transferred to Sin Sqn Flight II as a Flight Member.</li><br></br>
				<li>The next round of Sinfantry Training will be next Saturday Dec 4th at 2100 UTC. Join us for some multiplayer fun and frolics.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
                <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.</li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
      <p>All in all, it's been a quiet week around the squadron and the ISDII Warrior. I look forward to flying with those who can attend Sinfantry Training on the 4th.</p>
	  <p>For Sin! </p>
	  <p>CPT SkyShadow </p>
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
    props: { activityData }, // will be passed to the page component as props
  };
}
