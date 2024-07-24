import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Recipe } from "./recipe.entity";
import { Repository } from "typeorm";
import { RecipeDto } from "./DTO/recipe.dto";

@Injectable()
export class RecipeService {

    constructor(@InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>) { }

    async createRecipe(recipedto: RecipeDto) {
        return await this.recipeRepository.save(recipedto);
    }

    async getAllRecipes() {
        return await this.recipeRepository.find();
    }

    async getRecipeById(id: number) {
        return await this.recipeRepository.findOne({ where: { id } });
    }

    async deleteRecipeById(id: number) {
        return await this.recipeRepository.delete({ id });
    }

    async updateRecipeById(id: number, recipedto: RecipeDto) {
        return await this.recipeRepository.update(id, recipedto);
    }

}
