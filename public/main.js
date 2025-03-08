// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import getCards from '../api/vocabApiCalls';

const init = () => {
  document.querySelector('#app').innerHTML = `
<div id='NavBar'>
<div id ='flexNav>
<h1 id='vocabPage'>Vocab Cards</h1>
</div>
</div>
<div id='main-container'>
<button id="test-btn">TEST</button>
</div>
  `;
  console.warn('YOU ARE UP AND RUNNING!');
  const testBTN = document.querySelector('#test-btn');
  testBTN.addEventListener('click', () => {
    getCards().then(console.warn);
  });
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};
export default init();
