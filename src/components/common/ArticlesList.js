import React, {useState, useEffect} from "react";
import {Button, Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";

export function ArticlesList({articles, loadMoreArticles, onArticleClick, totalResults}) {
  const [pageSize, setPageSize] = useState(20);

  function onLoadMoreArticles() {
    setPageSize(pageSize + 20);
  }

  useEffect(() => {
    loadMoreArticles(pageSize);
  }, [pageSize]);

  return (
    <Row className="row-cols-1 row-cols-md-3">
      {
        articles.map((article, i) => {
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="my-2 d-flex align-items-stretch"
              key={`${article.source.id || article.source.name}-${i}`}>
              <ArticleCard article={article} onArticleClick={onArticleClick}/>
            </Col>
          )
        })
      }
      {
        totalResults > articles.length &&
        <Row className="container-fluid m-5 py-3 border">
          <Col className="text-center">
            <Button onClick={onLoadMoreArticles}>Load More</Button>
          </Col>
        </Row>
      }
    </Row>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  onArticleClick: PropTypes.func.isRequired,
  loadMoreArticles: PropTypes.func.isRequired,
  totalResults: PropTypes.number.isRequired
}

export default ArticlesList;
