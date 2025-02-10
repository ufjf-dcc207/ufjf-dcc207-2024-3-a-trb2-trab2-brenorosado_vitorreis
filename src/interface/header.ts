import { RecipeType } from "./recipe"

export interface HeaderProps{
    balance: number
    recipes: RecipeType[]
    removeRecipe : (id:number) => void
}