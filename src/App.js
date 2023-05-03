import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Container from './Components.js/Container';
import Header from './Components.js/Header';
import WatchPage from './Components.js/WatchPage';
import { Provider } from 'react-redux';
import Store from './Utils.js/Store';
import Results from './Components.js/Results';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
   <Header/>
   <Outlet/>
       </div>
       </Provider>
  );
}

export const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
      element:<Container/>
      },
       {
        path:"/watch",
      element:<WatchPage/>
      },
       {
        path:"/results",
      element:<Results/>
      }

    ]

  }
])

export default App;
