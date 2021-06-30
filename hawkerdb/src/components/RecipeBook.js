import React from "react"; // in node module (out of Nm into components )
import Listing from "../components/Listing";
import AddNew from "../components/AddNew"; // add dots infront to represent paths //add ../
import HawkerDirectory from "../components/HawkerDirectory";
import CreateHawker from "../components/CreateHawker";
import axios from "axios";
// import CreateComments from "./CreateReview";
// import RecipePage from "../components/RecipePage"


export default class RecipeBook extends React.Component {
  
    url ="https://3000-amethyst-canid-ubusltct.ws-us08.gitpod.io/"
   

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
        newmenu_highlights: []
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
                        onAddNewRecipe={this.addNewRecipe}   //link to functions in AddNew
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
        } else if (this.state.active === "createhawker") { //where does this add comefrom
            return (
                <React.Fragment>
                    <CreateHawker //is this reference to the file name?
                        onUpdateFormField={this.updateFormField}
                        newstall_name={this.state.stall_name}
                        newmenu_highlights={this.state.menu_highlights}
                        onAddNewLocations={this.addNewLocations}   //link to functions in AddNew
                    />
                  {/* render content  */}
                
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

    addNewRecipe = async () => {
        let response = await axios.post(this.url + "recipes", {
            recipe_name: this.state.newrecipe_name,
            ingredient_part_1: this.state.newingredient_part_1.split(',')
        })
        console.log(response) //check if response sent out
        this.fetchDataRecipes();
        this.setState({
        
            'active': 'listing'
        })
    }

    // addNewCommments = async () => {
    //     let response = await axios.post(this.url + this.state.location/recipe/ +  "recipes", {
    //         recipe_name: this.state.newrecipe_name,
    //         ingredient_part_1: this.state.newingredient_part_1.split(',')
    //     })
    // }
     
    // //Function ofr create comments button
    // renderRecipeReview = async (id) =>  //write api function for get recipe specific 
    // { let response = await axios.get(this.url+"/reviews", {
    //       //need to add in specific function here 
    //        newcomment = this.state.newcomment, 
    //        newcomment_contributor= this.state.newcomment_contributor
    // })
    // console.log(response) 
    // this.fetchDataRecipe(this.state._id) // but this must specify specific id 
    

    // }// end of renderReview

    addNewLocations = async () => {  
        let response = await axios.post(this.url + "locations", {
            stall_name: this.state.newstall_name,
            menu_highlights: this.state.newmenu_highlights.split(',') //how to show an array?
        })
        console.log(response)
        this.fetchDataLocation();
        this.setState({
            'active': 'listing'
        })
    };

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
                                Add New Recipe
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
                        {/* this is for setting additional tabs */}
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => {
                                    this.setActive("createhawker");
                                }}
                            >
                                Create Hawker Location
              </button>
                        </li>
                    </ul>
                    {this.renderContent()}
                </div>

                {/* call instance here */}
            </React.Fragment>
        );
    }
}