import Header from './components/navbar/Header';
import Sidebar from './components/SideNav/Sidebar';
import RecommendedVideo from './components/recommendedVideos/RecommendedVideo';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Header />
            <div className='app_page'>
               <Sidebar />
                <RecommendedVideo />
           </div>
          </Route>
         <Route exact path="/search/">
         <Header />
            <div className='app_page'>
               <Sidebar />
               <SearchPage />
           </div>
         </Route>
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
