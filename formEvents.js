import { createStar, getStars, updateStar } from './api/starsApiCalls';
import starsPage from './pages/stars';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-form')) {
      const payload = {
        title: document.querySelector('#stellar-object-type').value,
        description: document.querySelector('#stellar-image').value
      };

      createStar(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateStar(patchPayload).then(() => {
          getStars().then(starsPage);
        });
      });
    }
  });
};
export default formEvents;
