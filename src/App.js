import './App.css';

import SideBar from './components/sideBar';
import Header from './components/header';

import './globalStyles/style.scss';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
