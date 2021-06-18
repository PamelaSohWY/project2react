import React from "react";

export default function CreateHawker(props) {
 return (
   <React.Fragment>

    {/* Create form field to add infor */}
     <h1>Add New Hawker</h1>
     <div>
     <div className="label">Stall Name</div>
        <input
        type= 'text'
        className='form-control'
        name='newTitle'
        value={props.newstall_name} //change to new value 
        onChange={props.onUpdateFormField} // 
        />
    </div>
    {/* Create form field to add information  */}
    <div>
        <div className="label">Menu Highlights</div>
        <input 
        time = 'text'
        className="form-control"
        name="newIngredients"
        value={props.newmenu_highlights}
        onChange={props.onUpdateFormField}
        // this is linked to RecipeBok
        />
    </div>
    <button className ="btn btn-primary mt-3" onClick={props.onAdd}>
    Add New
    </button> 
   </React.Fragment>
 );
}