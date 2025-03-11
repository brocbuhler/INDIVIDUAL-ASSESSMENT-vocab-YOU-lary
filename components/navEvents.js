import starsPage from '../pages/stars';
import stellarFormPage from '../pages/stellarForm';
// import renderToDOM from '../utils/render';

const navEvents = () => {
  document.querySelector('#nav-stars').addEventListener('click', starsPage);

  document.querySelector('#nav-form').addEventListener('click', stellarFormPage);
};

export default navEvents;
