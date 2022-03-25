import styles from './styles';

export const medals = {
  DFC: 'dfc',
  IS_CR: 'iron star with copper ribbon',
  IS_CW: 'iron star with copper wings',
  IS_BR: 'iron star with bronze ribbon',
  IS_BW: 'iron star with bronze wings',
  IS_SR: 'iron star with silver ribbon',
  IS_SW: 'iron star with silver wings',
  IS_GR: 'iron star with gold ribbon',
  IS_GW: 'iron star with gold wings',
  IS_PR: 'iron star with platinum ribbon',
  IS_PW: 'iron star with platinum wings',
  LOC: 'loc',
  LOS: 'los',
  MOC_BOC: 'medal of communication - bronze oak cluster',
  MOC_SOC: 'medal of communication - silver oak cluster',
  COB: 'commendation of bravery',
  MOI: 'medal of instruction',
  IAR: 'imperial achievement ribbon',
  ISM: 'imperial security medal',
  IC: 'ic',
  PC: 'palpatine crescent',
  BS: 'bronze star of the empire',
  SS: 'silver star of the empire',
  GS: 'gold star of the empire',
  OOR: 'oor',
  GOE: 'goe',
  MOH: 'moh',
  TUA: 'tua',
  MUA: 'mua',
};

export const medalImages = Object.values(medals).reduce((acc, medal) => ({
  ...acc,
  [medal]: () => (
    <img
      src={`https://raw.githubusercontent.com/SmTaUcM/Sin-Squadron-WSR/master/public/medals/${medal}.jpg`}
      alt={`Icon for ${medal}`}
      style={styles.medal}
    />
  ),
}), {});
