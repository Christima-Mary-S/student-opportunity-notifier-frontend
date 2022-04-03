import { useSelector } from "react-redux";
import { selectSavedArticles } from "../selectors/selectors";

function SavedArticles() {
  const savedArticles = useSelector(selectSavedArticles);
  console.log(savedArticles);

  return (
    <div>
      {savedArticles.map((article) => {
        const { title, location, link } = article;
        return (
          <div className="bg-black-light border-2 border-slate-600 rounded-sm p-2 flex md:w-[750px] md:h-[50px] justify-between mb-1">
            <p>
              {title}, {location}
            </p>
            <button className="bg-cyan-light w-12 transform ease-in-out flex justify-center items-center p-2  rounded-md border-0 capitalize">
              <a href={link}>Read</a>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SavedArticles;
