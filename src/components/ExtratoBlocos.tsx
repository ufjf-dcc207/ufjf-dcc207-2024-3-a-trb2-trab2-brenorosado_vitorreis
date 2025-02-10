import { RecipeType } from "../interface/recipe"

interface ExtratoProps{
    recipe: RecipeType
}

export default function ExtratoBloco({recipe}: ExtratoProps){
    return(
    <div className="extrato-item">
        <p className="valor">R${recipe.value.toLocaleString()}</p>
        <p className="lixeira">X</p>
    </div>
)
}