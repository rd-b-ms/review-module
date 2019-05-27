import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import RatingBar from './RatingBar.jsx';
import Pages from './Pages.jsx';
import { PageStyle } from '../componentsStyles/AppStyles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: [],
      splitReviews: [],
      allReviews: [],
      currentPage: 0,
      search: false,
      searchSplitReviews: [],
      searchWord: '',
      searchWordNotFound: false,
      allSearchReviews: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.backArrowClicked = this.backArrowClicked.bind(this);
    this.forwardArrowClicked = this.forwardArrowClicked.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.backToReviews = this.backToReviews.bind(this);
  }

  componentDidMount() {
    axios.get('/messages')
      .then((response) => {
        const splitReviewsList = [];
        let fiveReviews = [];
        for (let i = 0; i < response.data.length; i += 1) {
          if (fiveReviews.length === 5) {
            splitReviewsList.push(fiveReviews);
            fiveReviews = [];
          } else if (i + 1 === response.data.length) {
            splitReviewsList.push(fiveReviews);
            fiveReviews = [];
          }
          fiveReviews.push(response.data[i]);
        }
        this.setState({
          allReviews: response.data,
          splitReviews: splitReviewsList,
          currentReviews: splitReviewsList[0],
        });
      });
  }

  backToReviews() {
    const { splitReviews } = this.state;
    this.setState({
      currentPage: 0,
      search: false,
      searchSplitReviews: [],
      searchWord: '',
      searchWordNotFound: false,
      currentReviews: splitReviews[0],
    });
  }

  handleSearch(word) {
    const { allReviews } = this.state;
    let searchReviews = allReviews.slice(0);
    searchReviews = searchReviews.filter((review) => {
      if (review.message.includes(`${word} `) || review.message.includes(`${word}. `)) {
        return true;
      }
    });
    if (searchReviews.length !== 0) {
      const searchPages = [];
      let fiveReviews = [];
      for (let i = 0; i < searchReviews.length; i += 1) {
        const reviewCopy = Object.assign({}, searchReviews[i]);
        const arrayOfWordsInMessage = reviewCopy.message.split(' ');
        for (let j = 0; j < arrayOfWordsInMessage.length; j += 1) {
          if (arrayOfWordsInMessage[j].toLowerCase() === word.toLowerCase() || arrayOfWordsInMessage[j].toLowerCase() === `${word.toLowerCase()}.`) {
            arrayOfWordsInMessage[j] = arrayOfWordsInMessage[j].toUpperCase();
          }
        }
        reviewCopy.message = arrayOfWordsInMessage.join(' ');
        if (fiveReviews.length === 5) {
          searchPages.push(fiveReviews);
          fiveReviews = [];
        } else if (i + 1 === searchReviews.length) {
          searchPages.push(fiveReviews);
          fiveReviews = [];
        }
        fiveReviews.push(reviewCopy);
      }
      this.setState({
        search: true,
        searchSplitReviews: searchPages,
        currentReviews: searchPages[0],
        searchWord: word,
        allSearchReviews: searchReviews.length,
      });
    } else {
      this.setState({
        searchWord: word,
        search: true,
        searchWordNotFound: true,
      });
    }
  }

  backArrowClicked() {
    const { splitReviews, currentPage } = this.state;
    if (splitReviews[currentPage - 1] !== undefined) {
      this.setState({
        currentReviews: splitReviews[currentPage - 1],
        currentPage: currentPage - 1,
      });
    }
  }

  forwardArrowClicked() {
    const { splitReviews, currentPage } = this.state;
    if (splitReviews[currentPage + 1] !== undefined) {
      this.setState({
        currentReviews: splitReviews[currentPage + 1],
        currentPage: currentPage + 1,
      });
    }
  }

  handlePageClick(page) {
    const { splitReviews } = this.state;
    this.setState({
      currentReviews: splitReviews[page],
      currentPage: page,
    });
  }

  render() {
    const {
      currentReviews,
      allReviews,
      splitReviews,
      currentPage,
      search,
      searchSplitReviews,
      searchWord,
      searchWordNotFound,
      allSearchReviews,
    } = this.state;
    if (searchWordNotFound) {
      return (
        <PageStyle>
          <RatingBar
            ratings={allReviews}
            search={search}
            handleSearch={this.handleSearch}
            backToReviews={this.backToReviews}
            searchWord={searchWord}
            searchWordNotFound={searchWordNotFound}
            allSearchReviews={allSearchReviews}
          />
        </PageStyle>
      );
    }
    return (
      <PageStyle>
        <RatingBar
          allSearchReviews={allSearchReviews}
          ratings={allReviews}
          search={search}
          handleSearch={this.handleSearch}
          backToReviews={this.backToReviews}
          searchWord={searchWord}
        />
        <ReviewList
          reviews={currentReviews}
          search={search}
          ratings={allReviews}
          searchWord={searchWord}
        />
        <Pages
          pageNumbers={splitReviews.length}
          searchPageNumbers={searchSplitReviews.length}
          handlePageClick={this.handlePageClick}
          backArrowClicked={this.backArrowClicked}
          forwardArrowClicked={this.forwardArrowClicked}
          currentPage={currentPage}
          search={search}
        />
      </PageStyle>
    );
  }
}

export default App;
