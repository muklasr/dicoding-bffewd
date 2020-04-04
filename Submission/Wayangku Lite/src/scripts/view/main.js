import "../component/SearchBar";
import "../component/CategoryCard";
import "../component/WayangList";
import DataSource from "../data/DataSource";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const wayangListElement = document.querySelector("wayang-list");
  const categoryCards = document.querySelectorAll("category-card");

  document.addEventListener("DOMContentLoaded", () => {
    DataSource.showAll()
      .then(renderResult)
      .catch(fallbackResult);
  });

  const onButtonSearchClicked = () => {
    DataSource.search(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  categoryCards.forEach(categoryCard => {
    categoryCard.addEventListener("click", e => {
      if (categoryCard.categoryText === "Semua") {
        DataSource.showAll()
          .then(renderResult)
          .catch(fallbackResult);
      } else {
        DataSource.searchByCategory(categoryCard.categoryText)
          .then(renderResult)
          .catch(fallbackResult);
      }
    });
  });

  const renderResult = results => {
    wayangListElement.wayangs = results;
  };

  const fallbackResult = message => {
    wayangListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
