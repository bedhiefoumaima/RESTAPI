



import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AddContact from './Pages/AddContact';
import ContactList from './Pages/ContactList';
import Error from './Pages/Error';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
   <Navbar/>
      <Switch>
     <Route exact path="/" component ={Home} />
     <Route path="/contacts" component ={ContactList} />
     <Route path={["/addContact", "/editContact/:id"]}
          component={AddContact} />
          <Route path="/*" component={Error} />
        </Switch>
        <br/>
   <Footer/>
    </div> 
  );
}

export default App;
