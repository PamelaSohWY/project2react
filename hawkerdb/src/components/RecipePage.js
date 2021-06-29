import React from "react";

export default function RecipePage(props){


    
return(
<React.Fragment>
<h1>Recipe for Review</h1>
        {props.data.map((r) => ( // need to change this to specifi id 
          <React.Fragment key={r._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{r.recipe_name}</h3>
                <h4>Ingredients</h4>
                <ul>
                  {r.ingredient_part_1}
                </ul>
                <button className="btn btn-primary mt-3" onClick={props.onRenderRecipeReview}>Review</button> 
                <button className="btn btn-primary mt-3" onClick={props.onEditRecipe}>Edit</button> 
                <button className="btn btn-primary mt-3" onClick={props.onEditRecipe}>Delete</button> 
              </div>
            </div>
</React.Fragment>
</React.Fragment>
);
}