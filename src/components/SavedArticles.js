import { useSelector } from "react-redux";
import { selectSavedArticles } from "../selectors/selectors";
import { ArticleDeleteButton } from "./ArticleDeleteButton";

function SavedArticles() {
  const savedArticles = useSelector(selectSavedArticles);
  console.log(savedArticles);

  return (
    <div>
      {savedArticles.map((article) => {
        const { title, location, link } = article;
        return (
          <div className="dash-card">
            <p>
              {title}, {location}
            </p>
            <div className="flex gap-2">
              <ArticleDeleteButton
                key={link}
                title={title}
                link={link}
                location={location}
              />
              <button className="bg-cyan-light w-112 transform ease-in-out flex justify-center items-center p-2  rounded-md border-0 capitalize">
                <a href={link}>Read</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SavedArticles;
