import Header from './components/Header';
import Home from './components/Home';
import Api from './components/Api';
import Footer from './components/Footer';
import './styles/scss/styles.scss';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Api />
      <Footer />
    </Router>
  );
}

export default App;
