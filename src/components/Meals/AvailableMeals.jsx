import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: "m2",
		name: "Burger",
		description: "Juicy beef patty with cheese and veggies",
		price: 12.99,
	},
	{
		id: "m3",
		name: "Pizza",
		description: "Classic Italian pizza with various toppings",
		price: 15.99,
	},
	{
		id: "m4",
		name: "Tacos",
		description: "Corn tortillas with grilled meat and salsa",
		price: 9.99,
	},
	{
		id: "m5",
		name: "Pasta Carbonara",
		description: "Creamy pasta with bacon and cheese",
		price: 14.99,
	},
	{
		id: "m6",
		name: "Sushi Burrito",
		description: "Sushi ingredients wrapped in a burrito form",
		price: 18.99,
	},
	{
		id: "m7",
		name: "Steak",
		description: "Tender and juicy grilled steak",
		price: 29.99,
	},
	{
		id: "m8",
		name: "Pad Thai",
		description: "Stir-fried noodles with peanuts and vegetables",
		price: 11.99,
	},
	{
		id: "m9",
		name: "Chicken Tikka Masala",
		description: "Spiced chicken in creamy tomato sauce",
		price: 16.99,
	},
	{
		id: "m10",
		name: "Sushi Rolls",
		description: "Variety of sushi rolls with different fillings",
		price: 20.99,
	},
	{
		id: "m11",
		name: "Kebab XXL",
		description: "Biggest Kebab, for the biggest hunger. 100% craft lamb meat",
		price: 13.37,
	},
    {
		id: "m12",
		name: "Polish Special",
		description: "Our famous Kebab XXL, with curly fries and Mountain Dew 2L",
		price: 21.37,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
        id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<>
			<section className={classes.meals}>
				<Card>
					<ul>{mealsList}</ul>
				</Card>
			</section>
		</>
	);
};

export default AvailableMeals;
