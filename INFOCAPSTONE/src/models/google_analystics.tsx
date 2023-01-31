import ReactGA from 'react-ga';

const TRACKING_ID = "G-RPCDY8SNQ3"
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category="Main Page", action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
}
export default useAnalyticsEventTracker;