import './App.css';

import SideBar from './components/sideBar';
import Header from './components/header';
import Admin from './components/admin';

import './globalStyles/style.scss';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="wrapperr">
        <Header />
        <Admin />
      </div>
    </div>
  );
}

export default App;
