import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import FamilyData from './views/FamilyData/familyData';
import FavoriteFoods from './views/FavoriteFoods/favoriteFoods';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/familyData">
            <FamilyData />
          </Route>
          <Route exact path="/favoriteFoods">
            <FavoriteFoods />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
