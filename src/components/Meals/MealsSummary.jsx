import React from "react";
import classes from "./MealsSummary.module.css"

const MealsSummary = () => {
    return (
        <> 
        <section className={classes.summary} >
            <h2>Tasty Delights, Brought to Your Doorstep</h2>
            <p>Indulge in a variety of flavors through our app. With a simple tap, your favorite dishes will arrive at your door.</p>

            <p>Order with ease, customize your preferences, and schedule deliveries from anywhere. Elevate your dining experience today.</p>
        </section>
        </>
    )
}
export default MealsSummary