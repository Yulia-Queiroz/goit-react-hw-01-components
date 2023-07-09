import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColor from 'randomcolor';

const getRandomColor = () => {
  const color = randomColor({
    luminosity: 'dark',
  });
  return color;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={`${styles.statistics} ${title && styles.padding}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(data => {
          return (
            <li
              className={styles.item}
              key={data.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={styles.label}>{data.label} </span>
              <span className={styles.percentage}>{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Statistics;
