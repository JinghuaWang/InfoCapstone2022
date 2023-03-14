
import styles from './homePage.css';
import SearchBar from '../components/searchBar/searchBar';
import Recommandation from '@/components/recommandation/recommandation'
import useAnalyticsEventTracker from '@/models/google_analystics';
import Grid from '@mui/material/Unstable_Grid2';
import createTheme from '@mui/material/styles/createTheme';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

/**
 * 主页面
 * @param props
 */
function homePage(props: any) {
  const theme = createTheme();
  
  const homepage = 
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
    </div>;
  const homePageContent = 
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{height: "6rem"}}></div>
        <Typography variant="h2" align="center" style={{ color: 'white', marginBottom: '0', fontWeight: '500'}}>
          UW Course Rating
        </Typography>
        <Typography variant="subtitle1" align="center" style={{color: grey[300]}}>
          Get UW course evaluations, grades, reviews before registration
        </Typography>
        <div style= {{height: "3rem"}}></div>
        <Grid xs={9} md={8} lg={7} >
          <SearchBar/>
        </Grid>
        <div style={{height: "6rem"}}></div>
        <Grid xs={10} md={10} lg={8} >
          <Recommandation />
        </Grid>
    </div>;
  
  return (
    <Grid container display="flex" justifyContent="center" style={{padding: theme.spacing(2)}}>
        <Grid xs={12} lg={8}>
          {homePageContent}
        </Grid>
    </Grid>
  );
}

// function foo(props: any) {
//     return (    
//     <div className={styles.contentWrapper} onLoad={() =>useAnalyticsEventTracker("Main Page")}>
//         <div>
//         <div className={styles.logo}>
//             <p style={{ color: 'white', fontSize: '32pt', marginBottom: '0', fontWeight: '600'}}>
//             UW Course Rating
//             </p>
//         </div>
//         <p style={{color: '#f0f0f0', fontSize: '12pt'}}>
//             Get UW course evaluations, grades, reviews before registration
//         </p>
//         </div>
//         <div className={styles.barWrapper}>
//         <SearchBar width="100%" />
//         </div>
//         <div className={styles.recommandation}>
//         <Recommandation />
//         </div>
//   </div>
//   );
// }

export default homePage;
