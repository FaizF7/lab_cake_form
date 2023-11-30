import { useState } from "react";

const CakeForm = () => {


    const [cakeName, setCakeName] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [ingredients, setIngredient] = useState("")

    

    return (  
        <section>
            <h3>New Cake</h3>
            <form>
                <label htmlFor="cake-name">Name: </label>
                <input
                    id="cake-name"
                    type="text"
                    placeholder="enter your cake name"
                />
                
                <label htmlFor="cake-price">Price: </label>
                <input
                    id="cake-price"
                    type="number"
                    placeholder="enter price"
                />

                <label htmlFor="cake-rating">Rating:</label>
                {/* <input
                    id="cake-rating"
                    type="text"
                    placeholder="enter your ingredients..."
                /> */}
                <select id="cake-rating">
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
                />
                <input type="submit" value="Add New Cake"/>
            </form>



        </section>

    );
}
 
export default CakeForm;