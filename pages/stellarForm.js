import renderToDOM from '../utils/render';
import { clearDom } from './domStructure';
// import formEvents from '../components/formEvents';

const stellarFormPage = (obj = {}) => {
  clearDom();
  const stellarForm = `<form id="${obj.firebaseKey ? `stellar-form--${obj.firebaseKey}` : 'submit-form'}">
 <input type="field" id="stellar-object-type" placeholder="Stellar Object" value="${obj.type || ''}" required>
 <input type="field" id="stellar-image" placeholder="www.yourimagehere.com" value="${obj.img || ''}" required>
 <button type="submit">Submit</button>
 </form>`;
  renderToDOM('#form-container', stellarForm);
};
export default stellarFormPage;
