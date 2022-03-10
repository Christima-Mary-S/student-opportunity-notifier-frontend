import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Card } from "./Card";

const selectArticles = createSelector(
  (state) => state.general,
  (general) => general.articles
);

function Articles() {
  const articles = useSelector(selectArticles);
  console.log(articles);
  return (
    <div className=" w-screen overflow-hidden bg-black-comp flex flex-col items-center justify-center md:p-20 p-14 ">
      <h2 className="mb-6 text-3xl text-gray-dark font-extrabold">ARTICLES</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Articles;
