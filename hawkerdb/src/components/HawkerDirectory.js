import React from "react";

export default function HawkerDirectory(props) {
  console.log(props.dataLocations)

return(
    <React.Fragment>
        <div className="container">
          <h1>Hawkers</h1>
          {props.data.map((h) => (
            <React.Fragment key={h._id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{h.stall_name}</h3>
                  <h4>Menu Highlights</h4>
                  {/* <ul>
                    {h.menu_highlights.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul> */}
                     {h.menu_highlights}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    
);
}