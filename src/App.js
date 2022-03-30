

import './App.css';
import './index.css';

import MembreCard from './components/MembreCard';
import GenerateNavBar from './components/GenerateNavBar';
import GenerateFooter from './components/GenerateFooter';
import MainGrid from './components/MainGrid';





function App() {
  return (
    <div className="App">
      <GenerateNavBar />
      <main className="main-accueil">
        <MainGrid />
      </main>
      <GenerateFooter />
    </div>
  );
}

export default App;
