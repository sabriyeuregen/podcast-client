import "./CategoryCard.scss";
import { usePodcastContext } from "../../store/podcast-context";
import { useState } from "react";
import { useCategoryFilterContext } from "../../store/categoryFilter";

const CategoryCard = ({title}) => {
  
  const { categoryClickHandler } = useCategoryFilterContext()

  return (
    <button className="categoryCard" onClick={()=> categoryClickHandler(title)}>
        <div className="caregoryCard-title">{title}</div>
    </button>
  )
}

export default CategoryCard