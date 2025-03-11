import navEvents from '../components/navEvents';
import navbarStart from './navbar';

const startApp = () => {
  console.warn('everthings ready');
  navbarStart();
  navEvents();
};
export default startApp();
