import { deleteStar, getSingleStar } from '../api/starsApiCalls';
import { renderDom } from '../pages/domStructure';
import stellarFormPage from '../pages/stellarForm';

const domEvents = () => {
  document.querySelector('#star-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete')) {
      console.warn('clicked delete');
      const [, firebaseKey] = e.target.id.split('--');
      deleteStar(firebaseKey).then(() => {
        renderDom();
      });
    } else if (e.target.id.includes('update')) {
      console.warn('clicked update');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleStar(firebaseKey).then((starObj) => stellarFormPage(starObj));
    }
  });
};

export default domEvents;
