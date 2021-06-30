import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main.js"
// import RecipeBook from "./components/RecipeBook.js"

export default function App() {
  return (
    <div className="container container-fluid">
      {/* <RecipeBook/> */} 
      {/* comment out Recipe Book to redo the project with just class components - 30 June 2021 */}
      <Main/>
    </div>
  );
}

//based on React Lab 10 
