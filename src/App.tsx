import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeaderImg from "./components/Header/HeaderImg";
import HeaderTitle from "./components/Header/HeaderTitle";
import ListContainer from "./components/Shared/SharedContainer";
import PreparationContainer from "./components/Preparation/PreparationContainer";
import PreparationListContainer from "./components/Preparation/PreparationListContainer";
import PreparationListItem from "./components/Preparation/PreparationListItem";
import PreparationTitle from "./components/Preparation/PreparationTitle";
import SharedContainer from "./components/Shared/SharedContainer";
import SharedTitle from "./components/Shared/SharedTitle";
import IngredientsListContainer from "./components/Ingredients/IngredientsListContainer";
import InstructionsListContainer from "./components/Instructions/InstructionsListContainer";
import InstructionsListItem from "./components/Instructions/InstructionsListItem";
import NutritionContainer from "./components/Nutrition/NutritionContainer";
import SharedDescription from "./components/Shared/SharedDescription";
import TableContainer from "./components/Nutrition/TableContainer";
import TableBodyContainer from "./components/Nutrition/TableBodyContainer";
import TableItem from "./components/Nutrition/TableItem";

function App() {
  return (
    <div className="w-full h-full items-center md:py-16 flex justify-center">
      <div className="w-[800px] rounded-xl flex flex-col justify-center bg-white">
        <HeaderImg src={"src/assets/images/omelette.jpeg"}></HeaderImg>
        <div className="flex flex-col gap-7 p-14">
          <HeaderContainer>
            <HeaderTitle>Simple Omelette Recipe</HeaderTitle>
            <SharedDescription>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your // choice of cheese, vegetables, or meats.
            </SharedDescription>
          </HeaderContainer>
          <PreparationContainer>
            <PreparationTitle>Preparation time</PreparationTitle>
            <PreparationListContainer>
              <PreparationListItem
                prep="Total"
                time="Approximately 10 minutes"
              />
              <PreparationListItem prep="Preparation" time="5 minutes" />
              <PreparationListItem prep="Cooking" time="5 minutes" />
            </PreparationListContainer>
          </PreparationContainer>
          <SharedContainer>
            <SharedTitle>Ingredients</SharedTitle>
            <IngredientsListContainer>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to tase</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </IngredientsListContainer>
          </SharedContainer>
          <ListContainer>
            <SharedTitle>Instructions</SharedTitle>
            <InstructionsListContainer>
              <InstructionsListItem
                step="Beat the eggs"
                description="In a bowl, beat the eggs with a pinch of salt and pepper
                    until they are well mixed. You can add a tablespoon of water
                    or milk for a fluffier texture."
              ></InstructionsListItem>
              <InstructionsListItem
                step="Heat the pan"
                description="Place a non-stick frying pan over medium heat and add
                    butter or oil."
              ></InstructionsListItem>
              <InstructionsListItem
                step="Cook the omelette"
                description="Once the butter is melted and bubbling, pour in the eggs.
                    Tilt the pan to ensure the eggs evenly coat the surface."
              ></InstructionsListItem>
              <InstructionsListItem
                step="Add fillings (optional)"
                description="When the eggs begin to set at the edges but are still
                    slightly runny in the middle, sprinkle your chosen fillings
                    over one half of the omelette."
              ></InstructionsListItem>
              <InstructionsListItem
                step="Fold and serve"
                description="As the omelette continues to cook, carefully lift one edge
                    and fold it over the fillings. Let it cook for another
                    minute, then slide it onto a plate."
              ></InstructionsListItem>
              <InstructionsListItem
                step="Enjoy"
                description="Serve hot, with additional salt and pepper if needed."
              ></InstructionsListItem>
            </InstructionsListContainer>
          </ListContainer>
          <NutritionContainer>
            <SharedTitle>Nutrition</SharedTitle>
            <SharedDescription>
              The table below shows nutritional values per serving without the
              additional fillings.
            </SharedDescription>
            <TableContainer>
              <TableBodyContainer>
                <TableItem nutrition="Calories" value="277kcal"></TableItem>
                <TableItem nutrition="Carbs" value="0g"></TableItem>
                <TableItem nutrition="Protein" value="20g"></TableItem>
                <TableItem nutrition="Fat" value="22g" last={true}></TableItem>
              </TableBodyContainer>
            </TableContainer>
          </NutritionContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
