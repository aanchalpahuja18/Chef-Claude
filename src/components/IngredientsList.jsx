export default function IngredienstList(props){
    const ingredientsList = props.ingredients.map((item) => {
        return <li key={item}>{item}</li>
    })
    return (
        <section>
                <h2>Ingredients on hand: </h2>
                <ul className="ingredients-list">{ingredientsList}</ul>
                {props.ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3 className="question">Ready for a recipe?</h3>
                        <p id="generate">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="recipe-btn" onClick={props.getRecipe}>Get a recipe</button>
                </div>
                }
            </section>
    )
}