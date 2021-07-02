import React from "react";
import axios from "axios";
import HawkerListings from "../components/HawkerListings"

export default class AddHawker extends React.Component {

url= "https://tgc12project2pswy.herokuapp.com/"
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



addNewLocations = async () => {  
    let response = await axios.post(this.url + "locations", {
        stall_name: this.state.newstall_name,
        menu_highlights: this.state.newmenu_highlights.split(',') //how to show an array?
    })
    console.log(response)
    this.props.setActive("hawkerlistings");
};

  render(){
 return (
   <React.Fragment>

    {/* Create form field to add infor */}
     <h1>Add New Hawker</h1>
     <div>
     <div className="label">Stall Name</div>
        <input
        type= 'text'
        className='form-control'
        name='newstall_name'
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