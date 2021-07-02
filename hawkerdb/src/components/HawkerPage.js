import React from "react";
import axios from "axios";

export default class HawkerListing extends React.Component {
   url = " https://8080-amethyst-canid-ubusltct.ws-us11.gitpod.io/";
 
// url= "https://tgc12project2pswy.herokuapp.com/"
  //State
  state = {
    data: [],
    stall_name:"", 
    menu_highlights:""
  };


  //Render
  render() {
    return (
      <React.Fragment>

       <h1>Stall Name: {this.state.data.stall_name} </h1> 

      </React.Fragment>
    );
  }

    async componentDidMount() {
        let response = await axios.get(this.url + "locations?_id=" + this.props.id);   // this is not working
        // let response = await axios.get(this.url + "locations"); 
        this.setState({
          data: response.data[0]
        });
      }
  }//end of Listing 