import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, status, mentor }) {
  const headingStyle = {
    color: status === 'ongoing' ? 'red' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Mentor:</dt>
        <dd>{mentor}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;