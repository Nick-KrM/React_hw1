import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import styled from 'styled-components';

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  color: #fff;
  -webkit-text-stroke: 0.3px #999;
  width: 100%;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  line-height: 1.3em;
  transition: transform 0.3s;

  &:hover {
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.01);
    cursor: pointer;
    transform: scale(1.2);
  }
`;

function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <ListItem
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </ListItem>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
