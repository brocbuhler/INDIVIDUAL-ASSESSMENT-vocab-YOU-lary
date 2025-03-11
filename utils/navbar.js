import renderToDOM from './render';

const navbarStart = () => {
  const navbar = `<div id="nav-container">
  <div class="nav-element">
  <button id="nav-stars">Stars</button>
  <button id="nav-form">Add Stellar Body</button>
  </div>
  </div>`;
  renderToDOM('#nav', navbar);
};
export default navbarStart;
