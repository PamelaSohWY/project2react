import React from "react";
import HawkerListings from "../components/HawkerListings";
import RecipeListings from "../components/RecipeListings";
import AddRecipe from "../components/AddRecipe";
import AddHawker from "../components/AddHawker";


export default class Main extends React.Component {
  //Declare state
  state = {
    active: "hawkerlistings"
  };

  //Set Page as Active
  setActive = (page) => {
    this.setState({
      active: page
    });
  };

  renderContent() {
    if (this.state.active === "hawkerlistings") {
      return (
        <React.Fragment>
          <HawkerListings />
        </React.Fragment>
      );
    } else if (this.state.active === "addhawkers") {
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
    };//end of renderContent
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
                  this.setActive("addhawker");
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
