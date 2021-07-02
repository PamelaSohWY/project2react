import React from "react";

import HawkerListings from "../components/HawkerListings"

export default class AddHawker extends React.Component {
    url = " https://8080-amethyst-canid-ubusltct.ws-us11.gitpod.io/"
// url= "https://tgc12project2pswy.herokuapp.com/"
  //State
  state = {
    dataLocations: [],
    newstall_name: "",
    newmenu_highlights: []
  };

   //Function to update Form 
   updateFormField = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
};//end of update Form 




  render(){
 return (
   <React.Fragment>

    {/* Create form field to add infor */}
     <h1>Edit New Hawker</h1>
     <div>
     <div className="label">Stall Name</div>
        <input
        type= 'text'
        className='form-control'
        name='newstall_name'
        placeholder={this.props.newstall_name}
        value={this.state.newstall_name} //change to new value 
        onChange={this.updateFormField} // 
        />
    </div>
    {/* Create form field to add information  */}
    <div>
        <div className="label">Menu Highlights</div>
        <input 
        time = 'text'
        className="form-control"
        name="newmenu_highlights"
        placeholder ={this.props.newstall_name}
        value={this.state.newmenu_highlights}
        onChange={this.updateFormField}
        // this is linked to RecipeBok
        />
    </div>
    <button className ="btn btn-primary mt-3" onClick={this.addNewLocations}>
    Add New
    </button> 
    <HawkerListings/>
   </React.Fragment>
 );
}
}