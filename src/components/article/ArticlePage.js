import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Title from "../common/Title";
import {Col, Image} from "react-bootstrap";
import PropTypes from "prop-types";

export function ArticlePage({article}) {
  return !article.source ?
    <Redirect to={"/"}/> :
    (
      <>
        <Title
          title={article.source.name || article.source.id && article.source.id.replace("-", " ").toUpperCase() || "Article"}
          subtitle={article.title}
        />
        {
          article.author &&
            <Col className="text-center">
              <p>
                <strong>{`By ${article.author}`}</strong>
              </p>
            </Col>
        }
        {
          article.publishedAt &&
            <Col className="text-center">
              <p className="text-muted">
                {`${new Date(article.publishedAt).toLocaleDateString()}`}
              </p>
            </Col>
        }
        {
          article.content &&
          <Col className="my-5">
            <p>
              {article.content}
            </p>
          </Col>
        }
        {
          article.urlToImage &&
            <Col>
              <Image className="card-img" src={article.urlToImage}/>
            </Col>
        }
        {
          article.description &&
          <Col className="text-left">
            <p><strong>Description:</strong> {article.description}</p>
          </Col>
        }
      </>
    );
}

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired
}

function mapStateToProps({article}) {
  return {
    article
  }
}

export default connect(mapStateToProps, {})(ArticlePage);
