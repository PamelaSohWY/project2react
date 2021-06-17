import React from "react"; // in node module (out of Nm into components )
import Listing from "../components/Listing";
import AddNew from "../components/AddNew"; // add dots infront to represent paths //add ../

export default class RecipeBook extends React.Component {

    state = {
        active: "listing",
        data: [
            {
                _id: 1,
                title: "Chicken Rice",
                ingredients: ["Chicken Broth", "Chicken", "Rice"]
            },
            {
                _id: 2,
                title: "Duck Rice",
                ingredients: ["Duck", "Rice"]
            },
        ],
        newTitle: "",
        newIngredients: ""
    };

    renderContent() {
        if (this.state.active === "listing") {
            return (
                <React.Fragment>
                    <Listing data={this.state.data} />
                    {/* will be using props to pass data  */}
                </React.Fragment>
            );
        } else if (this.state.active === "add") { //where does this add comefrom
            return (
                <React.Fragment>
                    <AddNew
                        onUpdateFormField={this.updateFormField}
                        newTitle={this.state.newTitle}
                        newIngredients={this.state.newIngredients}
                        onAddNew={this.addNew}
                    //this is passed to Add New component using props
                    />
                </React.Fragment>
            );
        }

    } // end of if 
    //Function to update Form 
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };//end of update Form 

    setActive = (page) => {  // why pass in page?  
        this.setState({
            active: page
        });
    }; //end of setActive 

    addNew = () => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    _id: Math.floor(Math.random() * 10000),
                    title: this.state.newTitle,
                    ingredients: this.state.newIngredients.split(",")
                }
            ],
            active: "Listing"
        });
    };//end of add new




render() {
    return (
        <React.Fragment>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className="nav-link active"
                            aria-current="page"
                            onClick={() => {
                                this.setActive("listing");
                            }}
                        >
                            Recipes
              </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link"
                            onClick={() => {
                                this.setActive("add");
                            }}
                        >
                            Add New
              </button>
                    </li>
                </ul>
                {this.renderContent()}
            </div>
        </React.Fragment>
    );
}
}