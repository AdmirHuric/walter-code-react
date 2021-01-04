import React, { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line import/named
import { searchHeadlinesByTerm } from "../../redux/actions/searchHeadlinesActions";
import { setCurrentArticle } from "../../redux/actions/articleActions";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-as-default
import ArticlesList from "../common/ArticlesList";
import Title from "../common/Title";
import {toast} from "react-toastify";
import Spinner from "../common/Spinner";
import { Col, InputGroup, FormControl, Dropdown } from "react-bootstrap";

const searchDelay = 1000;

class SearchPage extends Component {
  state = {
    searchTerm: "",
    sortBy: "publishedAt",
    searched: false,
    pageSize: 20
  };

  searchDelay = null;

  setCurrentArticle = (article) => {
    const {setCurrentArticle, history} = this.props;
    setCurrentArticle(article);
    history.push(`/article/${article.source.id || article.source.name}`);
  }

  onSortByChange = (event) => {
    const {pageSize, searchTerm} = this.state;
    const {searchHeadlinesByTerm} = this.props;
    this.setState({sortBy: event});
    searchHeadlinesByTerm(searchTerm, pageSize, event).catch((error) => {
      toast.error(error.message || "Couldn't complete search, please try again.")
    });
  }

  onSearchTermChange = (event) => {
    const value = event.target.value;
    const {searchHeadlinesByTerm} = this.props;
    const {sortBy, pageSize} = this.state;

    if (this.searchDelay) {
      clearTimeout(this.searchDelay);
    }

    if (!value) {
      this.setState({searched: false, sortBy: "publishedAt"});
      return;
    }

    //delay if user continues typing
    this.searchDelay = setTimeout(() => {
      this.setState({searchTerm: value, searched: true});
      searchHeadlinesByTerm(value, pageSize, sortBy).catch(error => toast.error(error.message || "Couldn't complete search, please try again."));
    }, searchDelay);
  }

  loadMoreArticles = (pageSize) => {
    const {searchTerm, sortBy} = this.state;
    const {searchHeadlinesByTerm} = this.props;
    if (searchTerm) {
      this.setState({pageSize});
      searchHeadlinesByTerm(searchTerm, pageSize, sortBy).catch((error) => {
        toast.error(error.message || "Couldn't complete search, please try again.")
      });
    }
  }

  render() {
    const {searched, sortBy} = this.state;
    const {searchHeadlines, apiCallLoading} = this.props;
    return (
      <>
        <Title
          title="Search Headline Articles"
          subtitle="Search every article by term"
        />
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              onChange={this.onSearchTermChange}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        {
          searched &&
            <Col className="my-3">
              <p className="text-muted">Sort By:</p>
              <Dropdown>
                <Dropdown.Item onSelect={this.onSortByChange} eventKey="publishedAt" active={sortBy === "publishedAt"}>Published At</Dropdown.Item>
                <Dropdown.Item onSelect={this.onSortByChange} eventKey="popularity" active={sortBy === "popularity"}>Popularity</Dropdown.Item>
                <Dropdown.Item onSelect={this.onSortByChange} eventKey="relevancy" active={sortBy === "relevancy"}>Relevancy</Dropdown.Item>
              </Dropdown>
            </Col>

        }
        <ArticlesList
          totalResults={searchHeadlines.totalResults || 0}
          articles={searchHeadlines.articles || []}
          loadMoreArticles={this.loadMoreArticles}
          onArticleClick={this.setCurrentArticle}
        />
        {
          apiCallLoading &&
            <Spinner/>
        }
      </>
    )
  }
}

SearchPage.propTypes = {
  searchHeadlines: PropTypes.object.isRequired,
  searchHeadlinesByTerm: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  apiCallLoading: PropTypes.bool.isRequired
}

function mapStateToProps({searchHeadlines, apiCallLoading}) {
  return {
    searchHeadlines,
    apiCallLoading
  }
}

const mapDispatchTopProps = {
  searchHeadlinesByTerm,
  setCurrentArticle
}

export default connect(
  mapStateToProps, mapDispatchTopProps)(SearchPage);
