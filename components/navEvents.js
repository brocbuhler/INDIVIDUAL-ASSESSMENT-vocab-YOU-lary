import starsPage from '../pages/stars';
import stellarFormPage from '../pages/stellarForm';
// import renderToDOM from '../utils/render';
import { getStars } from '../api/starsApiCalls';

const navEvents = () => {
  document.querySelector('#nav-stars').addEventListener('click', () => {
    getStars().then(starsPage);
  });

  document.querySelector('#nav-form').addEventListener('click', stellarFormPage);
};

export default navEvents;
