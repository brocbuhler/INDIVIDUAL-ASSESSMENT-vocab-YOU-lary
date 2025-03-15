import renderToDOM from '../utils/render';

const renderDom = () => {
  const domString = `
  <h1 id='default-page'>Welcome to the Galaxy</h1>
    <img id="galaxy" src="https://cdn.esahubble.org/archives/images/thumb700x/heic0602a.jpg">
    <div id='star-container'></div>
    <div id='form-container'></div>`;
  renderToDOM('#app', domString);
  console.warn('dom rendered');
};
const clearDom = () => {
  const domString = `<div id='star-container'></div>
  <div id='form-container'></div>`;
  renderToDOM('#app', domString);
};
export { renderDom, clearDom };
