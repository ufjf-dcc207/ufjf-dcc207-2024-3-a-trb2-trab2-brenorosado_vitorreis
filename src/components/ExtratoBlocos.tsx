import { RecipeType } from "../interface/recipe"

interface ExtratoProps{
    recipe: RecipeType
    removeRecipe: (id:number) => void
}

export default function ExtratoBloco({recipe, removeRecipe}: ExtratoProps){
    function handleDelete(){
        removeRecipe(recipe.id)
    }
    return(
    <div className="extrato-item">
        <p>R${recipe.value.toLocaleString()}</p>
        <p>{recipe.title}</p>
        <p className="lixeira" onClick={handleDelete}>X</p>
    </div>
)
}