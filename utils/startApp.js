// import formEvents from '../components/formEvents';
import navEvents from '../components/navEvents';
import navbarStart from './navbar';
import { renderDom } from '../pages/domStructure';

const startApp = () => {
  console.warn('everthings ready');
  renderDom();
  navbarStart();
  navEvents();
};

export default startApp;
