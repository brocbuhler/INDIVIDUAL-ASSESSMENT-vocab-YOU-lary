// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

const init = () => {
  console.warn('YOU ARE UP AND RUNNING!');
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();

export default init;
