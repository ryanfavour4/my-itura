import Navbar from './components/Navbar'

import Homepage from './pages/Homepage';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Homepage/>
      </header>
    </div>
  );
}

export default App;