// import formEvents from '../components/formEvents';
import navEvents from '../components/navEvents';
import navbarStart from './navbar';
import formEvents from '../components/formEvents';
import { renderDom } from '../pages/domStructure';

const startApp = () => {
  console.warn('everthings ready');
  renderDom();
  navbarStart();
  navEvents();
  formEvents();
};

export default startApp;
