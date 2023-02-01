import styles from '@/pages/homePage.css'
import RatingCard from '@/components/ratingCard'
import BreakDown from '@/components/breakDown'
import {Divider} from 'antd'

function CourseInfoPage(props:any){
    return (
        <div className={styles.cards}>
            <RatingCard/>
            <Divider/>
            <BreakDown/>
        </div>
    );
}

export default CourseInfoPage
