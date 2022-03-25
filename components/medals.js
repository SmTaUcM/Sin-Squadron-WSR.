import styles from './styles';

export const medals = {
  DFC: 'dfc',
  IS_CR: 'is-cr',
  IS_CW: 'is-cw',
  IS_BR: 'is-br',
  IS_BW: 'is-bw',
  IS_SR: 'is-sr',
  IS_SW: 'is-sw',
  IS_GR: 'is-gr',
  IS_GW: 'is-gw',
  IS_PR: 'is-pr',
  IS_PW: 'is-pw',
  LOC: 'loc',
  LOS: 'los',
  MOC_BOC: 'moc-boc',
  MOC_SOC: 'moc-soc',
  COB: 'cob',
  MOI: 'moi',
  IAR: 'iar',
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
