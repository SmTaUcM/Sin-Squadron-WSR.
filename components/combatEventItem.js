import T from 'prop-types';
import Link from './link';
import styles from './styles';

export default function CombatEventItem({
  id,
  name,
  ends,
  highlight,
  notes,
}) {
  return (
    <div
      style={{
        ...(highlight ? styles.highlighted : {}),
        marginBottom: '0.5em',
        paddingBottom: '0.5em',
      }}
    >
      <Link
        href={`https://tc.emperorshammer.org/combat.php?id=${id}`}
        target="_blank"
        rel="noreferrer"
        style={{
          ...(highlight ? styles.highlightedLink : {}),
        }}
      >
        <strong>{name}</strong>
      </Link>

      { ` until ${ends}.`}

      {notes ? <p>{notes}</p> : null}
    </div>
  );
}

CombatEventItem.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  ends: T.string.isRequired,
  highlight: T.bool,
  notes: T.string,
};

CombatEventItem.defaultProps = {
  highlight: false,
  notes: null,
};
