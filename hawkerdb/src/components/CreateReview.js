import React from "react"

export default function CreateReview(props) {
    return <React.Fragment>
        <h1>Add new review</h1>
        <div>
            <label className="form-label">Review Title </label>
            <input type="text"
                className="form-control"
                name="newTitle"
                value={props.newReviewTitle}
                onChange={props.updateFormField}
            />
        </div>
        <div>
            <label className="form-label">Food Review</label>
            <textarea className="form-control" name="newContent" onChange={props.updateFormField}>
                {props.newReviewContent}
            </textarea>
        </div>
        <div>
            <label className="form-label">Date</label>
            <input type='date' className="form-control"
                value={props.newDate}
                onChange={props.updateFormField}
                name="newDate" />
        </div>
        <button onClick={props.addNewNote}>Add Note</button>
    </React.Fragment>

}