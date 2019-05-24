import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewBar from './RatingBar.jsx';
import Pages from './Pages.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: [],
      splitReviews: [],
      allReviews: [],
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.backArrowClicked = this.backArrowClicked.bind(this);
    this.forwardArrowClicked = this.forwardArrowClicked.bind(this);
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
    } = this.state;
    return (
      <div>
        <ReviewBar ratings={allReviews} />
        <ReviewList reviews={currentReviews} />
        <Pages
          pageNumbers={splitReviews.length}
          handlePageClick={this.handlePageClick}
          backArrowClicked={this.backArrowClicked}
          forwardArrowClicked={this.forwardArrowClicked}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default App;
