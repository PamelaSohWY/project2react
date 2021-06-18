import React from "react";

export default function Listing(props) {
  console.log(props.data) //to test if props is passed down
  return (
    <React.Fragment>
      <div className="container">
        <h1>Recipe Listing</h1>
        {props.data.map((r) => (
          <React.Fragment key={r._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{r.recipe_name}</h3>
                <h4>Ingredients</h4>
                <ul>
                  {r.ingredient_part_1}
                </ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}