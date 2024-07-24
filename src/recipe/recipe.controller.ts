import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { RecipeService } from "./recipe.service";
import { RecipeDto } from "./DTO/recipe.dto";

@Controller('recipe')
export class RecipeController {

    constructor(private readonly recipeService:RecipeService) { }

    @Post('create')
    async createRecipe(@Body() recipedto: RecipeDto) {
        return await this.recipeService.createRecipe(recipedto);
    }

    @Get('all')
    async getAllRecipes() {
        return await this.recipeService.getAllRecipes();
    }

    @Get()
    async getRecipeById(@Query('id') id: number){   
        return await this.recipeService.getRecipeById(id);
    }

    @Delete()
    async deleteRecipeById(@Query('id') id: number){
        return await this.recipeService.deleteRecipeById(id);
    }

    @Put()
    async updateRecipeById(@Query('id') id: number, @Body() recipedto: RecipeDto){
        return await this.recipeService.updateRecipeById(id, recipedto);
    }


}