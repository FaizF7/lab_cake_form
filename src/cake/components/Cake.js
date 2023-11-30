const Cake = ({cake}) => {

  return (
    <div>
        <h2>{cake.cakeName}</h2>
        <p>Rating: {cake.rating} / 5 | Price: £{cake.price}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>{cake.ingredients.map((ingredient, index) => <li key={index} >{ingredient}</li>)}</ul>
    </div>
  )
}

export default Cake;