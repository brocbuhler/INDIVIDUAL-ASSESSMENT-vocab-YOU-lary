import renderToDOM from '../utils/render';

const stellarFormPage = (obj = {}) => {
  const stellarForm = `<form id="${obj.firebaseKey ? `stellar-form--${obj.firebaseKey}` : 'submit-form'}">
 <div id="form-container">
 <input type="field" id="stellar-object-type" placeholder="Stellar Object" value="${obj.type || ''}" required>
 <input type="field" id="stellar-image" placeholder="www.yourimagehere.com" value="${obj.img || ''}" required>
 <button type="submit">Submit</button>
 </div></form>`;
  renderToDOM('#app', stellarForm);
};
export default stellarFormPage;
