import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="logo"/>
        </div>
        <h1>Learn & Master Plutora at scale :)</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
