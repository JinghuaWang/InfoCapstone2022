import ReactGA from 'react-ga4';

const TRACKING_ID = "G-1X4JT54S1M"
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category="Main Page", action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
}
export default useAnalyticsEventTracker;