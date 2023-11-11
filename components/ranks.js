import styles from './styles';

export const ranks = {
  General: 'gn',
  Colonel: 'col',
  'Lieutenant Colonel': 'lc',
  Major: 'maj',
  Captain: 'cpt',
  Commander: 'cm',
  'Lieutenant Commander': 'lcm',
  Lieutenant: 'lt',
  'Sub-Lieutenant': 'sl',
};

export const rankImages = Object.keys(ranks).reduce((acc, rank) => ({
  ...acc,
  [rank]: () => (
    <img
      src={`https://tc.emperorshammer.org/images/ranks/${ranks[rank]}.png`}
      alt={`Badge icon for ${rank}`}
      style={styles.rankBadge}
    />
  ),
}), {});
