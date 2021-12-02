import T from 'prop-types';
import Card from './card';
import CombatEventItem from './combatEventItem';
import styles from './styles';

/* eslint react/jsx-props-no-spreading: 0 */

export default function CombatEvents({ combatEvents }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        Combat Events
      </h5>

      { combatEvents.map((c) => <CombatEventItem {...c} key={c.id} />) }
    </Card>
  );
}

CombatEvents.propTypes = {
  combatEvents: T.arrayOf(T.shape(CombatEventItem.propTypes)).isRequired,
};
