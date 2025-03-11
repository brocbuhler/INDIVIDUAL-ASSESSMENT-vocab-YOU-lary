import renderToDOM from '../utils/render';

const starsPage = () => {
  const stars = `<div id="star-container">
  <h1 id="test-star">this is the star page welcome</h1>
  </div>`;
  renderToDOM('#app', stars);
};
export default starsPage;
