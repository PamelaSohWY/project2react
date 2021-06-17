import React from "react";
import axios from "axios";

export default class Listing extends React.Component {
    url = "https://3000-amethyst-canid-ubusltct.ws-us09.gitpod.io/" //keep this url in common file later 
    // use the url in the gitpod(express/mongo) found after browser is running (node index.js) this is reference in the lab instructions
    //URL property is added to the class which we store the base URL to the endpoint 

  state = {
    data: [] //create state with only one property, data 
  };

  render() {
    return  <React.Fragment>
        <div className="container">
          <h1>Hawkers</h1>
          {this.state.data.map((h) => (
            <React.Fragment key={h._id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{h.stall_name}</h3>
                  <h4>Menu Highlights</h4>
                  <ul>
                    {h.menu_highlights.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    
  }

  async componentDidMount() { 
    let response = await axios.get(this.url + "locations");
    console.log(response.data); // this is to check that the data is loaded when called
    this.setState({
      data: response.data
    });
  }
}