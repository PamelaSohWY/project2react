import {StrictMode} from 'react';
import ReactDOM from 'react-dom';//same
import App from './App'; //same
import RecipeBook from './components/RecipeBook';


const rootElement = document.getElementById("root"); 

ReactDOM.render(
  <StrictMode>
    <RecipeBook />
  </StrictMode>,
 rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

