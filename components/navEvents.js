import starsPage from '../pages/stars';
import stellarFormPage from '../pages/stellarForm';
// import renderToDOM from '../utils/render';
import { getStars } from '../api/starsApiCalls';
// import domEvents from './domEvents';

const navEvents = (user) => {
  document.querySelector('#nav-stars').addEventListener('click', () => {
    getStars(user.uid).then((stars) => starsPage(stars, user));
  });

  document.querySelector('#nav-form').addEventListener('click', () => stellarFormPage({}, user));
};

export default navEvents;
