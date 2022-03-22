import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import FamilyData from './views/FamilyData/familyData';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
