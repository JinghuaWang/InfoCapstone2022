import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './index.css';
import ProgressBar from './progressBar';

const BreakDown = (props: any) => {
  const { breakdown } = props;
  return (
    <div className={styles.bars}>
      <h2 style={{margin: '0 0 4vh', fontWeight: '600', fontSize:'18pt'}}>Rating Breakdown</h2>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['instructor_contribution']} size={23} text={'Instructor’s contribution'}/>
        <ProgressBar value={breakdown['teaching_effectiveness']} size={23} text={'Teaching effectiveness'}/>
      </div>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['usefulness_of_course_content']} size={23} text={'Usefulness of course content'}/>
        <ProgressBar value={breakdown['course_organization']} size={23} text={'Course organization'}/>
      </div>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['clarity_of_concept_explanation']} size={23} text={'Concept explanation'}/>
        <ProgressBar value={breakdown['reasonable_assigned_work']} size={23} text={'Reasonable assigned work'}/>
      </div>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['availability_of_extra_help']} size={23} text={'Availability of extra help'}/>
        <ProgressBar value={breakdown['grading_techniques']} size={23} text={'Grading techniques'}/>
      </div>
      <p style={{paddingRight: '8vw', alignSelf: 'flex-end', fontSize: 'x-small', opacity: '0.4'}}>Official Ratings from UW Course Evaluations</p>
    </div>
  );
};

const mapStateProps = (state: any) => {
  return {
    breakdown: state.courseInfo.breakdown,
  };
};

export default connect(mapStateProps)(BreakDown);
