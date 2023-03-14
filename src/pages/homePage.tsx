import styles from './homePage.css';
import SearchBar from '../components/searchBar/searchBar';
import Recommandation from '@/components/recommandation/recommandation'
import useAnalyticsEventTracker from '@/models/google_analystics';

/**
 * 主页面page
 * @param props
 */
function homePage(props: any) {
  return (
    <div className={styles.contentWrapper} onLoad={() =>useAnalyticsEventTracker("Main Page")}>
      <div>
        <div className={styles.logo}>
          <p style={{ color: 'white', fontSize: '32pt', marginBottom: '0', fontWeight: '600'}}>
            UW Course Rating
          </p>
        </div>
        <p style={{color: '#f0f0f0', fontSize: '12pt'}}>
          Get UW course evaluations, grades, reviews before registration
        </p>
      </div>
      <div className={styles.barWrapper}>
        <SearchBar width="100%" />
      </div>
      <div className={styles.recommandation}>
        <Recommandation />
      </div>
    </div>
  );
}

export default homePage;
