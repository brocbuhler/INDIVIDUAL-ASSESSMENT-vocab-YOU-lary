import { createStar, updateStar } from '../api/starsApiCalls';
import { renderDom } from '../pages/domStructure';
// import domEvents from './domEvents';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!user) {
      console.warn('No user is signed in!');
      return; // Exit if user is not signed in or not available
    }
    const timestamp = new Date(Date.now());
    console.warn('submit button pressed! 1');
    if (e.target.id.includes('submit-form')) {
      console.warn('targeting is correct! 2');
      const payload = {
        type: document.querySelector('#stellar-object-type').value,
        img: document.querySelector('#stellar-image').value,
        desc: document.querySelector('#stellar-desc').value,
        uid: user.uid,
        timestamp
      };

      createStar(payload).then(({ name }) => {
        console.warn('activating createstar 3');
        const patchPayload = { firebaseKey: name };

        updateStar(patchPayload).then(() => {
          console.warn('activating updateStar 4');
          renderDom();
        });
      });
    } else if (e.target.id.includes('stellar-form')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        type: document.querySelector('#stellar-object-type').value,
        img: document.querySelector('#stellar-image').value,
        desc: document.querySelector('#stellar-desc').value,
        uid: user.uid,
        timestamp,
        firebaseKey,
      };

      updateStar(payload).then(() => {
        renderDom();
      });
    }
  });
};
export default formEvents;
