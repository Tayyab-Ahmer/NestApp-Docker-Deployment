import { Module } from "@nestjs/common";
import { RecipeController } from "./recipe.controller";
import { RecipeService } from "./recipe.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "./recipe.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Recipe])],
    controllers: [RecipeController],
    providers: [RecipeService]
})
export class RecipeModule { }