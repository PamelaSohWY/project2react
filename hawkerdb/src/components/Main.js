import React from "react";
import HawkerListings from "../components/HawkerListings";
import RecipeListings from "../components/RecipeListings";
import AddRecipe from "../components/AddRecipe";
import AddHawker from "../components/AddHawker";
import HawkerPage from "../components/HawkerPage";
import EditHawker from "../components/EditHawker"


export default class Main extends React.Component {
  //Declare state
  state = {
    active: "hawkerlistings",
    id:""
  };

  //Set Page as Active
  setActive = (page, id = "") => {
    this.setState({
      active: page,
      id: id
    });
  };

  renderContent() {
    if (this.state.active === "hawkerlistings") {
      return (
        <React.Fragment>
          <HawkerListings setActive ={this.setActive} />
        </React.Fragment>
      );
    } else if (this.state.active === "addhawkers") {
      console.log(1);
      return (
        <React.Fragment>
          <AddHawker setActive={this.setActive} />
        </React.Fragment>
      );
    } else if (this.state.active === "recipelistings") {
      return (
        <React.Fragment>
          <RecipeListings />
        </React.Fragment>
      );
    } else if (this.state.active === "addreceipe") {
      return (
        <React.Fragment>
          <AddRecipe setActive={this.setActive} />
        </React.Fragment>
      );
    }
    
    else if (this.state.active === "onehawker") {
      return (
        <React.Fragment>
        <HawkerPage setActive ={this.setActive} id={this.state.id}/>
      </React.Fragment>
      );
    }

    else if (this.state.active === "edithawker") {
      return (
        <React.Fragment>
        <EditHawker setActive ={this.setActive} id={this.state.id}/>
      </React.Fragment>
      );
    }
    
    
    ;//end of renderContent
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  this.setActive("hawkerlistings");
                }}
              >
                Hawker Listings
                </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  this.setActive("addhawkers");
                }}
              >
                Add Hawker
                </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  this.setActive("recipelistings");
                }}
              >
                Recipe Listings
                </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  this.setActive("addrecipe");
                }}
              >
                Add Recipe
                </button>
            </li>
          </ul>
        

          {this.renderContent()}
        </div>
      </React.Fragment>
    );
  }
}
