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
        <p className="valor">R${recipe.value.toLocaleString()}</p>
        <p className="lixeira" onClick={handleDelete}>X</p>
    </div>
)
}