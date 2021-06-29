import React from "react";

export default function Listing(props) {
  console.log(props.dataRecipes) //to test if props is passed down
  return (
    <React.Fragment>
      <div className="container">
        <h1>Recipe Listing</h1>
      



        {props.data.map((r) => (
          <React.Fragment key={r._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{r.recipe_name}</h3>
                <h4>Ingredients</h4>
                <ul>
                  {r.ingredient_part_1}
                </ul>
                <button className="btn btn-primary mt-3 mr-1" onClick={props.onRenderRecipeReview}>Review</button> 
                <button className="btn btn-primary mt-3" onClick={props.onEditRecipe}>Edit</button> 
                <button className="btn btn-primary mt-3" onClick={props.onDeleteRecipe}>Delete</button> 
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}