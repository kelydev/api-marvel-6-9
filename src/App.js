import Header from './components/Header';
import Home from './pages/Home';
import Video from './pages/Video';
import Character from './pages/Character';
import Comic from './pages/Comic';
import Footer from './components/Footer';
import './styles/scss/styles.scss';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const credits = {
    author: 'kelydev',
    currentYear: new Date().getFullYear()
  };
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Video/>} />
        <Route path="/characters" element={<Character/>} />
        <Route path="/comics" element={<Comic/>} />
      </Routes>
      <Footer credits={credits}/>
  </Router>
  );
}
export default App;
