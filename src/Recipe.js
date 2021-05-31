import React from 'react';
import style from './recipe.module.css'

const Recipe = ({Title, Calories, Image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{Title}</h1>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
            <p><strong><b>Calories = {Calories}</b></strong></p>
            <img className={style.image} src={Image} alt="" />
        </div>
    )
}

export default Recipe;