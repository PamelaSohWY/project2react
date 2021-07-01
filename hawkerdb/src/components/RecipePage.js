import React from "react";

//Render Tag Function
// need to add in

export default function RecipePage(props){
console.log(props.dataRecipes) // change to specific function for chosen recipe

    
return(
<React.Fragment>
<h1>Recipe for Review</h1>

<div className= "container">
  <h1>{props.dataRecipes.recipe_name}</h1>
  <div> {this.renderTags}  </div> 
   {/*this will be linked to the render tag function above*/}
   <div>
     <p>{this.props.dataRecipes.description}</p>
   </div>
   {/* call the Review Listing  */}
   </Review> 
  </div> 
  
 

</React.Fragment>
);
}