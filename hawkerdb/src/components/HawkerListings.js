import React from "react";
import axios from "axios";

export default class HawkerListing extends React.Component {
  url = "https://3000-amethyst-canid-ubusltct.ws-us08.gitpod.io/";

  //State
  state = {
    data: []
  };

  //Get the data
  

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
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

    async componentDidMount() {
        let response = await axios.get(this.url + "locations");
        this.setState({
          data: response.data
        });
      }
  }//end of Listing 