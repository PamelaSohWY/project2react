import React from "react";
import axios from "axios";

export default class HawkerListing extends React.Component {
   url = " https://8080-amethyst-canid-ubusltct.ws-us11.gitpod.io/";
//  url= "https://tgc12project2pswy.herokuapp.com/"
  //State
  state = {
    data: []
  };

  //Get the data

  renderRecipeReview = async (id) => {
    this.props.setActive("onehawker", id)

  };
  
  addNewLocations = async () => {  
    let response = await axios.post(this.url + "locations", {
        stall_name: this.state.newstall_name,
        menu_highlights: this.state.newmenu_highlights.split(',') //how to show an array?
    })
    console.log(response)
    this.props.setActive("hawkerlistings");
};

  //Render
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <h1>Hawkers</h1>
          {this.state.data.map((h) => (
            <React.Fragment key={h._id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{h.stall_name}</h3>
                  <h4>Menu Highlights</h4>
                     {h.menu_highlights}

                     <button className="btn btn-primary mt-3 mr-1" onClick={() => this.renderRecipeReview(h._id)}>Review</button> 
                <button className="btn btn-primary mt-3" onClick={this.EditRecipe}>Edit</button> 
                <button className="btn btn-primary mt-3" onClick={this.DeleteRecipe}>Delete</button> 
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

    async componentDidMount() {
        let response = await axios.get(this.url + "locations")
        this.setState({
          data: response.data.reverse()
        });
      }
  }//end of Listing 