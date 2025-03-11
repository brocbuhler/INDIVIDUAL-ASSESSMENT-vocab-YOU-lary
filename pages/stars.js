import renderToDOM from '../utils/render';

const starsPage = (array) => {
  let stars = '<h1 id="test-star">this is the star page welcome</h1>';
  array.forEach((item) => {
    stars = `<div id="star-container">
  <h3 class="star-card">${item.type}</h3>
  <img class="star-img" src=${item.img}>
  </div>`;
  });
  renderToDOM('#app', stars);
};
export default starsPage;
