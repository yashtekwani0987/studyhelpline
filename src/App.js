import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home/Home';

function App() {
  return (
    <>
    <Router>
    <Header/>
   <Routes>
      <Route exact path='/' element={<Home key='home'/>}/>         
      <Route exact path='/Form' element={<Form key='form'/>} />   
   
    </Routes>
    </Router>
    </>
  );
}

export default App;
