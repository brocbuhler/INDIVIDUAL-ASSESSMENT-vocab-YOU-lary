// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import getStars from '../api/vocabApiCalls';

const init = () => {
  document.querySelector('#app').innerHTML = `
<h1 id='default-page'>Test Page</h1>
<button id="test-btn">TEST</button>
  `;
  console.warn('YOU ARE UP AND RUNNING!');
  const testBTN = document.querySelector('#test-btn');
  testBTN.addEventListener('click', () => {
    getStars().then(console.warn);
  });
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};
export default init();
