import React from "react"

export default function CreateComments(props) {
    return (
        <React.Fragment>
        {/* Create Form Field */}
        <h1>Add New Comments</h1>
        <div>
        <input
        type= 'text'
        className='form-control'
        name='newreview_contributor'
        value={props.newreview_contributor}
        onChange={props.onUpdateFormField}
        />
        </div> 
        <div>
        <div className="label">New Comment</div>
        <input
        type= 'text'
        className='form-control'
        name='newreview'
        value={props.newreview}
        onChange={props.onUpdateFormField}
        />
        </div>

        <button className ="btn btn-primary mt-3" onClick={props.onaddNewComments}> 
    Add New
    </button> 
        


        </React.Fragment>
    )
}