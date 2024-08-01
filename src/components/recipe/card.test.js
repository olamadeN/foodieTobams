import {render, screen} from '@testing-library/react';
import RecipeCard from './card';
import tasty2  from "../../image/tastyRecipes/tasty2.png";
const data = [
    {
        id:1,
        img:tasty2,
        title:"Fresh Lime Roasted Salmon with Ginger Sauce",
        time: "30 Minutes",
        type:"Fish"
    }
]

test("test if Component renders successfully",  () => {
    render(<RecipeCard data={data}/>)
    const cardElement =  screen.getByTestId('cardTestId');
    expect(cardElement).toBeInTheDocument();
})

test("test if Component recieves props successfully",  () => {
    render(<RecipeCard data={data}/>)
    expect(<RecipeCard data={data}/>).toHaveProperty('props')
})