import React from 'react';
import ReactLoading from 'react-loading';
import styles from './styles.module.scss';

const Loading = ({ type, color }) => (
  <div className={styles.loading}>
    <ReactLoading type={type} color={color} height={'50px'} width={'50px'} />
  </div>
);

export default Loading;
