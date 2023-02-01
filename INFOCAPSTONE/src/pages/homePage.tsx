import styles from './homePage.css';
import SearchBar from '../components/searchBar';
import Recommandation from '@/components/recommandation'
import useAnalyticsEventTracker from '@/models/google_analystics';

/**
 * 主页面page
 * @param props
 */
function homePage(props: any) {
  return (
    <div className={styles.contentWrapper} onLoad={() =>useAnalyticsEventTracker("Main Page")}>
      <div className={styles.logo}>
        <img
          onClick={() =>useAnalyticsEventTracker("Logo")}
          src={require('../assets/logo.jpeg')}
          alt="logo icon"
          width="42px"
          height="42px"
        />
        <p style={{ margin: 0, color: 'white', fontSize: '38pt' }}>
          Course Rating
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
