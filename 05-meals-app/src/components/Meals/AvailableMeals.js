import React, { useState, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL + 'meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      const loadedMeals = Object.entries(data).reduce((acc, [id, item]) => {
        acc.push({ id, ...item });
        return acc;
      }, []);
      setMeals(loadedMeals);
    };

    fetchMeals()
      .catch((error) => {
        setHttpError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <section className={classes.mealsLoading}>Loading</section>;
  }

  if (httpError) {
    return <section className={classes.mealsError}>Loading</section>;
  }

  const mealList = meals.map((meal) => (
    <MealItem key={meal.id} meal={meal}>
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
