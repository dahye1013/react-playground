import React from 'react';

import classes from './MealSummary.module.css';
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose you favorite meal from our broad selection of available meals and enjoy a delicious
        lunch or dinner at home.
      </p>
      <p>
        All out meals are cooked with high-quality ingredient, just in time and of course by
        experienced chefs!
      </p>
    </section>
  );
};

export default MealSummary;
