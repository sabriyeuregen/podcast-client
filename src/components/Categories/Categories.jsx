import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.scss";
import { usePodcastFilterContext } from "../../store/podcastFilter-context";
const Categories = () => {
  const { podcastCategory } = usePodcastFilterContext();

  console.log(podcastCategory)

  const categoriesTitle = Object.keys(podcastCategory).map((i, idx) => {
    return <CategoryCard key={idx} title={i} />;
  });

  return <div className="categories">{categoriesTitle}</div>;
};

export default Categories;
