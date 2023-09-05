import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/ContactMe';

function App() {
  return (
    //To create a route for the website
    //Add self closing tag to Layout element will cause side bar to disapper
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
 