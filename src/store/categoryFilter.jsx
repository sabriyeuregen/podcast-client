import { createContext, useContext, useState } from "react";

const CategoryFilter = createContext();

export const CategoryFilterWrapper = ({ children}) => {

    const [categoryTitle , setCategoryTitle ] = useState("")

    const categoryClickHandler = (title) => {
        setCategoryTitle(title)
    }
   
    return (
      <CategoryFilter.Provider value={{categoryTitle, categoryClickHandler}}>
        {children}
      </CategoryFilter.Provider>
    )
}
export const useCategoryFilterContext = () => useContext(CategoryFilter)