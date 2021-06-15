import React from "react";

export default class Recipes extends React.Component {

    state = {
        'recipe_name': "",
        'course': "",
        'cusine': "",
        'history': "",
        'description': "",
        'ingredient part 1': "",
        'ingredient part 2': "",
        'ingredient part 3': "",
        'preparation_method': "",
        'preparation_time': "",
        'cooking_method': "",
        'cooking_time': "",
        'serving size': "",
        'recipe_contributor': "",
        'source_of_recipe': "",
        'date': "",
        img_url: ""
    }// end of state 

    updateFirstName = (event) => {
      this.setState({
          recipe_name: event.target.value
      })
  }
    
  addItem = (e) =>{

  }// end of itme 

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>Add New Recipe</h3>
                    <div>
                    <label className="form-label">Recipe Name:</label>
                    <input onChange={this.updateFirstName} type="text" value={this.state.recipe_name} name="recipe_name" className="form-control" />
                </div>
        <button onClick={this.addItem}>Add</button> 
                </div>
            </React.Fragment>

        );

    }// end of render

}//end of compenent 