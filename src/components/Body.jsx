import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import {getRecipeFromMistral} from "./ai"

export default function Body(){
    const [ingredients, setIngredients] = useState([])

    // const [recipeShown, setRecipeShown] = useState(false)

    const [recipe, setRecipe] = useState("") 

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        // setRecipeShown(prev => !prev)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        // console.log(recipeMarkdown);
        setRecipe(recipeMarkdown)
        
    }

    return(
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. oregano" name="ingredient"/>
                <button>+ Add ingredient</button>
            </form>
            {
            ingredients.length > 0 &&
            <IngredientsList ingredients = {ingredients} getRecipe = {getRecipe}/>
            }
            {recipe && <ClaudeRecipe recipe = {recipe}/>} 
        </main>
    )
}