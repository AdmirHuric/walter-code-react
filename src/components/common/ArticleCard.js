import React from "react";
import {Button, Card} from "react-bootstrap";
import PropTypes from "prop-types";

const ArticlesCard = ({article, onArticleClick}) => (
  <Card className="shadow-sm">
    <Card.Header className="font-weight-bold">{article.source.name}</Card.Header>
    <Card.Body className="text-left">
      {
        article.urlToImage &&
        <Card.Img
          style={{maxHeight: 300}}
          className="card-img-bottom h-60" src={article.urlToImage}/>
      }
      <p className="font-weight-normal text-muted h-40 py-2">{article.description}</p>
    </Card.Body>
    <Card.Footer className="text-center">
      <Button onClick={onArticleClick.bind(this, article)}>Read Full Article</Button>
    </Card.Footer>
  </Card>
);

ArticlesCard.propTypes = {
  article: PropTypes.object.isRequired,
  onArticleClick: PropTypes.func.isRequired
}

export default ArticlesCard;
