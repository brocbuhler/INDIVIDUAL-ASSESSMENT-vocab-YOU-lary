import renderToDOM from '../utils/render';

const stellarFormPage = () => {
  const stellarForm = `<form id="stellar-form">
 <div id="form-container">
 <input type="field" id="stellar-object-type" placeholder="Stellar Object">
 <input type="field" id="stellar-image" placeholder="www.yourimagehere.com">
 </div></form>`;
  renderToDOM('#app', stellarForm);
};
export default stellarFormPage;
