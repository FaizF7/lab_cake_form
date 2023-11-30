import { useState } from "react";
import Cake from "../components/Cake";
import CakeForm from "../components/CakeForm";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
					ingredients: [
						"eggs",
						"butter",
						"sugar",
						"self-raising flour",
						"baking powder",
						"milk"
					],
					price: 5,
					rating: 5
			},
			{
				cakeName: "Tea Loaf",
				ingredients: [
					"eggs",
					"oil",
					"dried fruit",
					"sugar",
					"self-raising flour",
					"strong tea",
				],
				price: 2,
				rating: 3
			},
			{
				cakeName: "Carrot Cake",
				ingredients: [
				"carrots",
					"walnuts",
					"oil",
					"cream cheese",
					"flour",
					"sugar",
				],
				price: 8,
				rating: 5
			} 
		]		
	)


	// 
	const cakeComponents = listOfCakes.map ((cake, index) => <Cake cake = {cake} key={index}/>)

	//Function to pass a prop
	const handleNewCakeSubmission = (newCake) => {
		const updatedCakes = [...listOfCakes]; 
		updatedCakes.push(newCake);
		setListOfCakes(updatedCakes);
	}

	return (
    <>
		<CakeForm handleNewCakeSubmission={handleNewCakeSubmission}/>
        {cakeComponents}

    </>
	)
}

export default CakeContainer;