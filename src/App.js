import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Homepage from './pages/Homepage';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;