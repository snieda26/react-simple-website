import './App.css';
import { Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Products, Services } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/services" component={Services} />
      <Footer />
    </>
  );
}

export default App;
