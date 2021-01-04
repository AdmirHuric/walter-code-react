import React from "react";
import ArticleCard from "./ArticleCard";
import renderer from "react-test-renderer";
import { topHeadlines } from "../../../tools/mockData";

it("renders correctly", () => {
  const tree = renderer.create(
    <ArticleCard
      article={topHeadlines.articles[0]}
      onArticleClick={jest.fn()}
    />
  );

  expect(tree).toMatchSnapshot();
});
