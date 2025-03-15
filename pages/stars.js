import renderToDOM from '../utils/render';
import { clearDom } from './domStructure';

const starsPage = (bodies) => {
  clearDom();
  console.warn('page loaded');
  let stars = '<h1 id="test-star">this is the star page welcome</h1>';
  bodies.forEach((item) => {
    stars += `<h3 class="star-card">${item.type}</h3>
  <img class="star-img" src=${item.img}>`;
  });
  renderToDOM('#star-container', stars);
};
export default starsPage;
