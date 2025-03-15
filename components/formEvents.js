import { createStar, getStars, updateStar } from '../api/starsApiCalls';
import starsPage from '../pages/stars';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn('submit button pressed! 1');
    if (e.target.id.includes('submit-form')) {
      console.warn('targeting is correct! 2');
      const payload = {
        type: document.querySelector('#stellar-object-type').value,
        img: document.querySelector('#stellar-image').value
      };

      createStar(payload).then(({ name }) => {
        console.warn('activating createstar 3');
        const patchPayload = { firebaseKey: name };

        updateStar(patchPayload).then(() => {
          console.warn('activating updateStar 4');
          getStars().then(starsPage);
        });
      });
    }
  });
};
export default formEvents;
