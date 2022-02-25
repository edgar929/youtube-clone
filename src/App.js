import Header from './components/navbar/Header';
import Sidebar from './components/SideNav/Sidebar';
import RecommendedVideo from './components/recommendedVideos/RecommendedVideo';
import './App.css';


function App() {
  return (
    <div className="App">
          <Header />
            <div className='app_page'>
               <Sidebar />
            <RecommendedVideo />
     </div>
   
    </div>
  );
}

export default App;
