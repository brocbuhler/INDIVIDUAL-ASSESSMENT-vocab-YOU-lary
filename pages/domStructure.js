import renderToDOM from '../utils/render';
import { getStars } from '../api/starsApiCalls';

const renderDom = () => {
  const domString = `
  <h1 id='default-page'>Test Page</h1>
    <button id="test-btn">TEST</button>
    <div id='star-container'></div>
    <div id='form-container'></div>`;
  renderToDOM('#app', domString);
  console.warn('dom rendered');
  const testBTN = document.querySelector('#test-btn');
  testBTN.addEventListener('click', () => {
    getStars().then(console.warn);
  });
};
const clearDom = () => {
  const domString = `<div id='star-container'></div>
  <div id='form-container'></div>`;
  renderToDOM('#app', domString);
};
export { renderDom, clearDom };
