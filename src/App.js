import './App.css';
import Navbar from './components/Navbar/Navbar';
import Photo from './components/PhotoBackground/Photo';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Title1 from './components/Title1/Title1';
import Campus from './components/Campus/Campus';
import Title2 from './components/Title2/Title2';
import Testmonials from './components/Testmonials/Testmonials';
import Title3 from './components/Title3/Title3';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Videoplayer from './components/Videoplayer/Videoplayer';

function App() {
  return (
   <div>
    {/* <h1>Mayur Soni is working on the react project.</h1> */}
    <Navbar/>
    <Photo/>
    <div className='conatiner'>
      <Title/>
    <Programs/>
    <About/>
    <Title1/>
    <Campus/>
    <Title2/>
    <Testmonials/>
    <Title3/>
    <Contact/>
    <Footer/>
    

    </div>

    
   </div>
  );
}

export default App;
