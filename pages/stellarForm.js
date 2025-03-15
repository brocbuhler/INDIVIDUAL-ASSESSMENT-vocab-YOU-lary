import renderToDOM from '../utils/render';
import { clearDom } from './domStructure';
import formEvents from '../components/formEvents';

const stellarFormPage = (obj = {}, user) => {
  if (!user) {
    console.warn('No user is signed in!');
    return; // Exit if user is not signed in or not available
  }
  clearDom();
  const stellarForm = `<form id="${obj.firebaseKey ? `stellar-form--${obj.firebaseKey}` : 'submit-form'}">
 <input type="text" id="stellar-object-type" placeholder="Stellar Object" value="${obj.type || ''}" required>
 <input type="url" id="stellar-image" placeholder="www.yourimagehere.com" value="${obj.img || ''}" required>
 <input type="text" id="stellar-desc" placeholder="Stellar Description" value="${obj.desc || ''}" required>
 <button id="subyag" type="submit">Submit</button>
 </form>`;
  renderToDOM('#form-container', stellarForm);
  formEvents(user);
};
export default stellarFormPage;
