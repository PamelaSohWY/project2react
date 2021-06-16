import React from "react";

export default function AddNew(props) {
 return (
   <React.Fragment>

    {/* Create form field to add infor */}
     <h1>Add New Recipe</h1>
     <div>
        <input
        type= 'text'
        className='form-control'
        name='newTitle'
        value={props.newTitle}
        onChange={props.onUpdateFormField}
        />
    </div>
    {/* Create form field to add information  */}
    <div>
        <div className="label">Ingredients</div>
        <input 
        time = 'text'
        className="form-control"
        name="newIngredients"
        value={props.newIngredients}
        onChang={props.onUpdateFormField}
        // this is linked to RecipeBok
        />
    </div>
    <button className ="btn btn-primary mt-3" onClick={props.onAdd}>
    Add New
    </button> 
   </React.Fragment>
 );
}