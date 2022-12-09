import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import FormDog from './components/FormDog/FormDog';
import NotFound from './components/NotFound/NotFound';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={FormDog}/>
        <Route exact path='/dog/:id' component={Detail}/>
        <Route path='/*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
