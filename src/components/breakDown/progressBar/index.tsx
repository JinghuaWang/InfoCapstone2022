import React from 'react';
import { Progress } from 'antd';
import styles from '../index.css';

const ProgressBar = (props: any) => {
  const { value, size = 10, text = 'test' } = props;

  function calculate(rate: number): number {
    return Math.floor((rate / 5) * 100);
  }

  function labelColor(rate: number): string {
    if (rate >= 4) {
      return '#5B8C00';
    }
    if (rate >= 3) {
      return '#D4B106'
    }
    return '#CF1322';
  }

  return (
    <div className={styles.barContainer}>
      <p
        style={{ margin: '0 0.5vw 0', width: '30vw', color: '#1f1f1f'}}
      >{`${text}`}</p>
      <Progress
        type="line"
        strokeWidth={size}
        percent={calculate(value)}
        showInfo={false}
        strokeColor="#755ebf"
      />
      <p style={{ margin: '0 1vw 0', fontSize: 'small', fontWeight: '400', color: labelColor(value)}}>{`${value}/5`}</p>
    </div>
  );
};

export default ProgressBar;
