import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import FormDog from './components/FormDog/FormDog';
import CardDetail from './components/CardDetail/CardDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={FormDog}/>
        <Route exact path='/game/:id' component={CardDetail}/>
        <Route path='/*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
