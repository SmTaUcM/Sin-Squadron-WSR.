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

const reportNumber = 51;
const startDate = '2023-07-14';
const endDate = '2023-11-10';
const submissionDate = '2023-11-11';

const citations = [
  'XvT-TC 1',
  'XvT-TC 2',
  'XvT-TC 3',
  'XvT-TC 10',
  'XvT-TC 14',
  'XvT-TC 31',
  'XvT-TC 41',
  'XvT-TC 70',
  'XvT-DB 1'
]; // Current for squadron citations.
const citationsChange ='-4';
// Use: citations.js for citations that are close to being complete.

const orders = [
];

const competitions = [
{
  id: '7716',
  name: 'A Tribute to the Empire',
  ends: 'Nov 12 2023',
  units: 'Entire TC',
  notes: 'November 11th is Tribute Day, the annual day of gratitude for soldiers of the Empire! This year we will share 3 puzzles, all on the theme of Imperial Service in the name of our late Emperor. They will be live from November 10th through November 12th to cover all time zones with links shared just prior to the start of the competition. Once completed, send screenshots of the completed puzzle (with the completion time visible) to the WO.',
  highlight: false,
}, 

{
  id: '7709',
  name: 'All I Want For Life Day (Is My Platinum COMPOST Membership Card)',
  ends: 'Nov 17 2023',
  units: 'Entire TC',
  notes: 'Tis the season for this year\'s "Lord of the TIEs" competition! The recruitment team at COMPOST has once again invited all active duty TIE Corps pilots. Objective Fly TIE-TC 244, Lord of the TIEs, and reach for the highest score you can get',
  highlight: false,
}, 

{
  id: '7717',
  name: 'Galaxy Children\'s Day Art Submission',
  ends: 'Dec 05 2023',
  units: 'Entire TC',
  notes: 'November 20th marks Galaxy Children\'s Day and we\'d like to see how you and your offspring fare into bringing the life on EH to art form. Childish art form more precisely.',
}, 

{
  id: '3582',
  name: 'SWTOR Conquest 2: The search for more Conquest, Season 2',
  ends: 'Dec 19 2023',
  units: 'Entire TC',
  notes: 'Pilots within the official organizational guilds on the Star Forge server (“Emperor’s Hammer” for the Sith Empire and “Infiltrator Wing” for the Republic) will compete against each other for placement awards while they aide the organization to meet its in-game goals.',
}, 

{
  id: '7711',
  name: 'ISDII Grey Wolf Patch (Art Competition)',
  ends: 'Dec 19 2023',
  units: 'Entire TC',
  notes: 'With the addition of Wing XIII and the ISDII Grey Wolf into Battlegroup I, we are now looking to create a patch for the ISDII Grey Wolf.',
}, 

{
  id: '7710',
  name: 'Battlegroup I Patch (Art Competition)',
  ends: 'Dec 19 2023',
  units: 'Entire TC',
  notes: 'With the addition of Wing XIII (and the ISDII Grey Wolf) into Battlegroup I, we are now looking to create a patch for Battlegroup I. The existing Hammer Patch will continue to be with us, but will only apply to the ISDII Hammer going forward.',
}, 

{
  id: '7691',
  name: 'SP Ace of the TIE Corps 2023 - Season Three',
  ends: 'Dec 31 2023',
  units: 'Entire TC',
  notes: 'Every Single Player mission flown earns the pilot a point according to the list of games below. The top ten pilots at the end of the month earn medals. At the end of the season the top fifteen pilots earn medals.',
}, 

{
  id: '7690',
  name: 'PvP Ace of the TIE Corps 2023 - Season Three',
  ends: 'Dec 31 2023',
  units: 'Entire TC',
  notes: 'Every Legion of Combat earned gives the pilot points based on the list of games below. The top ten pilots at the end of the month earn medals. At the end of the season the top fifteen pilots earn medals.',
}, 

{
  id: '7689',
  name: 'PvE Ace of the TIE Corps 2023 - Season Three',
  ends: 'Dec 31 2023',
  units: 'Entire TC',
  notes: 'Every Legion of Skirmish earned gives the pilot a point based on the list of games below. The top ten pilots at the end of the month earn medals. At the end of the season the top fifteen pilots earn medals.',
}, 

{
  id: '7701',
  name: 'How to Elite Dangerously',
  ends: 'Jan 6 2024',
  units: 'Entire TC',
  notes: 'For the next 3 months, Honsou and/or Taurus will host a weekly gathering, where pilots from across the TIE Corps can come and ask about anything from the basics of Combat, Exploration and Mining, to the intricacies of trade routes and faction politics in Elite Dangerous, whilst playing the game together. We will also be happy to help with any advice on ship builds and the best ways to proceed in a chosen career in game. There will also be opportunities to accompany us on community events to make significant cash gains.',
}, 

{
  id: '7692',
  name: 'SWTOR: Galactic Seasons V',
  ends: 'Jan 23 2024',
  units: 'Entire TC',
  notes: 'Galactic Seasons is a 20-week-long event in which players complete weekly tasks for rewards, reputation, and achievement. Players can earn companions, mounts, weapons, and even strongholds by completing the reward track.',
},
];

const combatEvents = [ 
];

const ACTIVITY = {
  // ------- Flight 1 -------
  // SkyShadow
  6958: {
    communication: 'Discord, E-Mail',
    flightActivity: '',
    otherActivity: 'TTT3 v3.1.0 programming',
    notes: '',
  },
  
  // Charlie Halcorr
  56764: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'E-Mail',
    flightActivity: '',
	otherActivity: '',
    notes: '',
  },
  
 // ------- Flight 2 -------
 // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Nix Varro
  56785: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // VACANT
  6958: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
   // Brao Denat
  56535: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // ------- Flight 3 -------
  // Oudik-Delta-4
  56571: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Chity'ke'nik
  56786: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // VACANT
  6958: {
    communication: '',
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
	  
        <center><h3><span style={{ color: "#1F51FF" }}>Squadron Commander's Speech</span></h3></center>
		
		<p>Greetings Sinners!
Well this report has been a very long time in the making, and I can only apologise for it taking so long to be published. Time always seems to have a funny way of getting in the way of best laid intentions.
So, we have a lot to cover since the last Sin Squadron report back in July. The squadron is holding strong at 10 pilots and we’ve had a lot of movement:
<p>New members:
Derek Igner,
Oudik-Delta-4,
Nix Varro,
Chity'ke'nik</p>

<p>Departing members:
Rui Borges,
Robert Hogan,
Derek Igner,
Jugeum Scath</p>

<p>During this period, we have seen MAJ Coremy Jertese step up as Squadron Executive Officer (SQXO) and LCM Oudik-Delta-4 as Flight III Leader who have bother been doing a fantastic job in their roles.</p>
<p>September saw the pilots of Sin Squadron and indeed the ISDII Warrior shoulder together to participate in Raise the Flag 2023 which saw the Warrior take the win and Sin place 6th. An achievement in which I am very proud of you all for contributing to.</p>
</p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>Sin Squadron places 6th overall in Raise the Flag 2023 with 6558 points!</li><br></br>
				<li>MAJ Coremy Jertese appointed Squadron Executive Officer (SQXO) as of 1 Aug 2023</li><br></br>
				<li>LCM Oudik-Delta-4 appoint Flight III Leader as of 4 Oct 2023</li><br></br>

        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
		<ul>
				<li>The Awards tab on member personnel records has been significantly redesigned to graphically showcase your medals/awards. Each element is clickable to show additional information, and works effectively on mobile. There have also been small tweaks to a couple of other tabs.</li><br></br>
				<li>Campaigns have been added to the system. An Emperor's Hammer campaign is a named operation that advances the EH plotline with broad participation by members in one or more subgroups. A General Campaign Medal (GCM) with appropriate clasp may be awarded to participants in approved campaigns. The General Campaign Medal is awarded to commemorate these campaigns and is displayed on profiles only. (It is considered to be part of a new category of awards and by design is not displayed on the uniform.)</li><br></br>
				<li>Elite Dangerous Rule Changes - TIE Corps-wide competitions such as Raise the Flag are an are opportunity to take a peek at the dustier corners of our rulebooks. Elite Dangerous, although a newish platform, hasn\'t seen much activity until recently. During this time, we've discovered a couple of exploitable activities that would result in a disproportionate amount of Legions being earned.
To that end, we\'re banning Donation and Courier missions from being acceptable Legions of Skirmish submissions. These modes can be completed exceedingly quickly (press button, receive points) and don\'t promote the kind of activity we\'re looking for.
These changes have been discussed with pilots who have submitted these types of missions recently, who agree and are voluntarily withdrawing their PvE submissions (which will also remove some points from the RtF scoreboards.)
Once we\'ve all caught our breath after Raise the Flag, we're also going to be taking a look at our Legion rules for Elite Dangerous in general; we've heard that submitting missions can be a little painful.
Let a TCCS member know if you have any questions or concerns.
</li><br></br>
				<li>Star Conflict Eligibility Changes - We regularly review our current game platforms and their requirements. Games may have new modes introduced or retired, new games may be made available, and our activity tracking systems may need to be occasionally refreshed. After a TIE Corps Command Staff discussion, we agreed to make the following changes to the eligibility requirements for Star Conflict:
A combination of at least three (kills + objectives) are required for a Star Conflict PvE match.
That is to say, if you have 1 kill and 2 objective points, you're eligible; or 3 objectives and no kills; or 2 objectives and 1 kill. Please continue to enter the number of kills on the submission screen.
Please feel free to reach out to your favorite TIE Corps Command Staff member if you have any questions.
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
		<p>LC SkyShadow </p>

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
