import React from 'react';

// imports of product arrays
import { electronics } from "../productArray";
import { kids } from "../productArray";
import { home } from "../productArray";
import { grocery } from "../productArray";
import { freshFoods } from "../productArray";
import { faceMasks } from "../productArray";



 const Category = ({handleCategory}) => {
  return (
    <div className="category">
      <ul>
        <li onClick={()=> handleCategory("electronics")}>Electronics ( {electronics.length} )</li>
        <li onClick={()=> handleCategory("faceMasks")}>face mask ( {faceMasks.length} )</li>
        <li onClick={()=> handleCategory("freshFoods")}>fresh food ( {freshFoods.length} )</li>
        <li onClick={()=> handleCategory("grocery")}>grocery ( {grocery.length} )</li>
        <li onClick={()=> handleCategory("home")}>home( {home.length} )</li>
        <li onClick={()=> handleCategory("kids")}>kids ({ kids.length} )</li>
        <p onClick={()=> handleCategory("viewAll")}>view all categories ›</p>
      </ul>
    </div>
  )
}

export default Category;
