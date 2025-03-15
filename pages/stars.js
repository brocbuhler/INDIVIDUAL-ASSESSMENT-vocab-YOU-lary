import renderToDOM from '../utils/render';
import { clearDom } from './domStructure';
import domEvents from '../components/domEvents';

const starsPage = (bodies) => {
  clearDom();
  console.warn('page loaded');
  let stars = '<h1 id="test-star">Stars of the Galaxy</h1>';
  bodies.forEach((item) => {
    stars += `<h3 class="star-card">${item.type}</h3>
  <img class="star-img" src=${item.img}>
  <p class="star-desc">${item.desc}</p>
  <button type='click' id='update--${item.firebaseKey}'>Update</button>
  <button type='click' id='delete--${item.firebaseKey}'>Delete</button>
  <p class="star-time">Time Added: ${item.timestamp}<p>`;
  });
  renderToDOM('#star-container', stars);
  domEvents();
};
export default starsPage;
