import { useState } from "react";

const CakeForm = ({handleNewCakeSubmission}) => {


    const [cakeName, setCakeName] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [ingredients, setIngredient] = useState("")

    const updateCakeName = (event)=>{
        setCakeName(event.target.value)
    }

    const updatePrice = (event)=>{
        setPrice(event.target.value)
    }

    const updateRating = (event)=>{
        setRating(event.target.value)
    }

    const updateIngredients = (event)=>{
        setIngredient(event.target.value)
    }

    const handleFormSubmission = (event) => {
        // No auto refresh when form submitted
        event.preventDefault();

        if (!cakeName|| !price|| !rating||!ingredients){
            alert("need to provide details")
            return
        }

        const newCake = {
            cakeName: cakeName,
            price: price,
            rating: rating,
            ingredients: ingredients.split(',')
        }
        setCakeName("");
        setPrice("");
        setRating("");
        setIngredient("");

        console.log(newCake);
        handleNewCakeSubmission(newCake);
    }


    return (  
        <section>
            <h3>New Cake</h3>
            <form onSubmit={(event) => handleFormSubmission(event)}>
                <label htmlFor="cake-name">Name: </label>
                <input
                    id="cake-name"
                    type="text"
                    placeholder="enter your cake name"
                    onInput={(event)=>updateCakeName(event)}
                    value={cakeName}
                />
                
                <label htmlFor="cake-price">Price: </label>
                <input
                    id="cake-price"
                    type="number"
                    placeholder="enter price"
                    onInput={(event)=>updatePrice(event)}
                    value={price}
                />

                <label htmlFor="cake-rating">Rating:</label>
                {/* <input
                    id="cake-rating"
                    type="text"
                    placeholder="enter your ingredients..."
                /> */}
                <select id="cake-rating" 
                        onInput={(event)=>updateRating(event)}
                        value={rating}
                >
                    <option>select rating</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <label htmlFor="cake-ingredients">Ingredients (enter comma separated)</label>
                <input
                    id="cake-ingredients"
                    type="text"
                    placeholder="enter your ingredients..."
                    onInput={(event)=>updateIngredients(event)}
                    value={ingredients}
                />
                <input type="submit" value="Add New Cake"/>
            </form>



        </section>

    );
}
 
export default CakeForm;