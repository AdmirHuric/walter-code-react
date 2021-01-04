import React, { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line import/named
import { loadTopHeadlines } from "../../redux/actions/topHeadlinesActions";
import { setCurrentArticle } from "../../redux/actions/articleActions";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-as-default
import ArticlesList from "../common/ArticlesList";
import Title from "../common/Title";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";

class HomePage extends Component {
  componentDidMount() {
    const {loadTopHeadlines} = this.props;
    loadTopHeadlines(20).catch((error) => {
      toast.error(error.message || "Couldn't load top articles.")
    });
  }

  setCurrentArticle = (article) => {
    const {setCurrentArticle, history} = this.props;
    setCurrentArticle(article);
    history.push(`/article/${article.source.id || article.source.name}`);
  }

  loadMoreArticles = (pageSize) => {
    const {loadTopHeadlines} = this.props;
    loadTopHeadlines(pageSize).catch((error) => {
      toast.error(error.message || "Couldn't load top articles.")
    });
  }

  render() {
    const {topHeadlines, apiCallLoading} = this.props;
    return (
        <>
          <Title
            title="Top Headline Articles"
            subtitle="Today's top headline articles for United States"
          />
          <ArticlesList
            articles={topHeadlines.articles || []}
            totalResults={topHeadlines.totalResults || 0}
            loadMoreArticles={this.loadMoreArticles}
            onArticleClick={this.setCurrentArticle}
          />
          {
            apiCallLoading && <Spinner/>
          }
        </>
      );
  }
}

HomePage.propTypes = {
  topHeadlines: PropTypes.object.isRequired,
  loadTopHeadlines: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  apiCallLoading: PropTypes.bool.isRequired
}

function mapStateToProps({topHeadlines, apiCallLoading}) {
  return {
    topHeadlines,
    apiCallLoading
  }
}

const mapDispatchTopProps = {
  loadTopHeadlines,
  setCurrentArticle
}

export default connect(
  mapStateToProps, mapDispatchTopProps)(HomePage);
