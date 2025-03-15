// import formEvents from '../components/formEvents';
import navEvents from '../components/navEvents';
import navbarStart from './navbar';
import { renderDom } from '../pages/domStructure';
// import domEvents from '../components/domEvents';

const startApp = () => {
  console.warn('everthings ready');
  renderDom();
  navbarStart();
  navEvents();
  // domEvents();
};

export default startApp;
