import logo from './assets/logo.svg'
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Profile userName='tokuD' />}
          />
          <Route
            path='/projects'
            element={<Projects userName='tokuD' />}
          />
          <Route
            path='/projects/:name'
            element={<ProjectDetail userName='tokuD' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
