import React from "react"; // in node module (out of Nm into components )
import Listing from "../components/Listing";
import AddNew from "../components/AddNew"; // add dots infront to represent paths //add ../
import HawkerDirectory from "../components/HawkerDirectory"
import axios from "axios"


export default class RecipeBook extends React.Component {
    url = "https://3000-amethyst-canid-ubusltct.ws-us08.gitpod.io/"
   

    state = {
        active: "listing",
        dataRecipes: [],
        dataLocations: [], //different data sets for different collections
        // {
        //     _id: 1,
        //     title: "Chicken Rice",
        //     ingredients: ["Chicken Broth", "Chicken", "Rice"]
        // },
        // {
        //     _id: 2,
        //     title: "Duck Rice",
        //     ingredients: ["Duck", "Rice"]
        // },

        newrecipe_name: "",
        newingredient_part_1: "",
        newstall_name: "",
        newmenu_highlights: ""
    };

    // This was to check that it works 
    // async componentDidMount(){
    //     let response = await axios.get("https://3000-amethyst-canid-ubusltct.ws-us09.gitpod.io/locations");
    //     console.log(response.data);
    //     // this.setState({
    //     //   data: response.data
    //     // });
    // }

    //Function to Fetch Data 
    fetchDataRecipes = async () => {
        let response = await axios.get(this.url + 'recipes');
        console.log(response.data) //testing
        this.setState({
            dataRecipes: response.data //
        })
        console.log(response.data)
    };
    fetchDataLocation = async () => {
        let response = await axios.get(this.url + 'locations');
        console.log(response.data)//
        this.setState({
            dataLocations: response.data
        })
        console.log(response.data)
    };

    componentDidMount() {
        this.fetchDataRecipes();
        this.fetchDataLocation();
    }

    renderContent() {
        if (this.state.active === "listing") {
            return (
                <React.Fragment>
                    <Listing data={this.state.dataRecipes} /> 
                    {/* make sure that the data (name of props) = the name of the data in the state */}
                    {/* will be using props to pass data  */}
                </React.Fragment>
            );
        } else if (this.state.active === "add") { //where does this add comefrom
            return (
                <React.Fragment>
                    <AddNew
                        onUpdateFormField={this.updateFormField}
                        newrecipe_name={this.state.newrecipe_name}
                        newingredient_part_1={this.state.newingredient_part_1}
                        onAddNewRecipe={this.AddNewRecipe}
                    //this is passed to Add New component using props
                    />
                </React.Fragment>
            );
        } else if (this.state.active === "hawkerdirectory") { //where does this add comefrom
            return (
                <React.Fragment>
                    <HawkerDirectory data={this.state.dataLocations} /> 
                    {/* this is passed to Add New component using props */}
                
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

    addNewRecipes = async () => {
        let response = await axios.post(this.url + "recipes", {
            recipe_name: this.state.newrecipe_name,
            ingredient_part_1: this.state.newingredient_part_1.split(',')
        })
        this.set.state({
            'data': [
                ...this.state.data,
                response.data[0]
            ],
            'active': 'listing'
        })
    }

    addNewLocations = async () => {  
        let response = await axios.post(this.url + "locations", {
            stall_name: this.state.newstall_name,
            menu_highlights: this.state.menu_highlights.split(',')
        })
        this.set.state({
            'data': [
                ...this.state.data,
                response.data[0]
            ],
            'active': 'listing'
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-tabs">
                        {/* this is for setting additional tabs */}
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
                        {/* this is for setting additional tabs */}
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
                        {/* this is for setting additional tabs */}
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => {
                                    this.setActive("hawkerdirectory");
                                }}
                            >
                                Hawker Directory
              </button>
                        </li>
                    </ul>
                    {this.renderContent()}
                </div>
            </React.Fragment>
        );
    }
}