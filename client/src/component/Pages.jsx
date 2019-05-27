import React from 'react';
import { PageButton, ArrowButtons, NumberInButton, SelectedButton, SelectDiv, PageButtonList, PageButtonUL} from '../componentsStyles/PagesStyle.jsx';


class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      pageNumbers,
      handlePageClick,
      backArrowClicked,
      forwardArrowClicked,
      currentPage,
      search,
      searchPageNumbers,
    } = this.props;

    const pageArray = [];
    const selectedPageButton = (
      <SelectedButton>
        <SelectDiv>
          {currentPage + 1}
        </SelectDiv>
      </SelectedButton>
    );
    const backArrow = (
      <ArrowButtons>
        <svg
          viewBox="0 0 18 18"
          role="img"
          aria-label="Next"
          focusable="false"
          style={{
            height: '0.75em',
            width: '0.75em',
            display: 'block',
            fill: 'rgb(0, 132, 137)',
          }}>
          <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
        </svg>
      </ArrowButtons>
    );
    const forwardArrow = (
      <ArrowButtons>
        <svg
          viewBox="0 0 18 18"
          role="img"
          aria-label="Previous"
          focusable="false"
          style={{
            height: '0.75em',
            width: '0.75em',
            display: 'block',
            fill: 'rgb(0, 132, 137)',
          }}
        >
          <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
        </svg>
      </ArrowButtons>
    );
    let numberOfPages = pageNumbers;
    if (search) {
      numberOfPages = searchPageNumbers;
    }
    for (let i = 1; i <= numberOfPages; i += 1) {
      pageArray.push(
        <PageButtonList>
          <PageButton type="button" onClick={() => handlePageClick(i - 1, search)}>
            <NumberInButton>{i}</NumberInButton>
          </PageButton>
        </PageButtonList>,
      );
    }
    if (pageArray.length <= 4 && currentPage === 0) {
      return (
        <PageButtonUL>
          {selectedPageButton}
          {pageArray[1]}
          {pageArray[2]}
          {pageArray[3]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (pageArray.length <= 4 && currentPage === 1) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {selectedPageButton}
          {pageArray[2]}
          {pageArray[3]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (pageArray.length <= 4 && currentPage === 2) {
      console.log('page 3');
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {pageArray[1]}
          {searchPageNumbers}
          {pageArray[3]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (pageArray.length <= 4 && currentPage === 3) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {pageArray[1]}
          {pageArray[2]}
          {selectedPageButton}
        </PageButtonUL>
      );
    }
    if (currentPage === 0) {
      return (
        <PageButtonUL>
          {selectedPageButton}
          {pageArray[currentPage + 1]}
          {pageArray[currentPage + 2]}
          {'...'}
          {pageArray[pageArray.length - 1]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (currentPage === 1) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {selectedPageButton}
          {pageArray[2]}
          {'...'}
          {pageArray[pageArray.length - 1]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (currentPage === 2) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {pageArray[1]}
          {selectedPageButton}
          {pageArray[3]}
          {'...'}
          {pageArray[pageArray.length - 1]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (currentPage === 3 && pageArray.length === 5) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {pageArray[1]}
          {pageArray[2]}
          {selectedPageButton}
          {pageArray[4]}
        </PageButtonUL>
      );
    }
    if (currentPage === 3) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {pageArray[1]}
          {pageArray[2]}
          {selectedPageButton}
          {pageArray[4]}
          {'...'}
          {pageArray[pageArray.length - 1]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (currentPage === pageArray.length - 1) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {'...'}
          {pageArray[pageArray.length - 3]}
          {pageArray[pageArray.length - 2]}
          {selectedPageButton}
        </PageButtonUL>
      );
    }
    if (currentPage === pageArray.length - 2) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {'...'}
          {pageArray[pageArray.length - 3]}
          {selectedPageButton}
          {pageArray[pageArray.length - 1]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    if (currentPage === pageArray.length - 3) {
      return (
        <PageButtonUL>
          <PageButtonList>
            <PageButton type="button" onClick={() => backArrowClicked(search)}>
              {forwardArrow}
            </PageButton>
          </PageButtonList>
          {pageArray[0]}
          {'...'}
          {pageArray[pageArray.length - 4]}
          {selectedPageButton}
          {pageArray[pageArray.length - 2]}
          {pageArray[pageArray.length - 1]}
          <PageButtonList>
            <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
              {backArrow}
            </PageButton>
          </PageButtonList>
        </PageButtonUL>
      );
    }
    return (
      <PageButtonUL>
        <PageButtonList>
          <PageButton type="button" onClick={() => backArrowClicked(search)}>
            {forwardArrow}
          </PageButton>
        </PageButtonList>
        {pageArray[0]}
        {'...'}
        {pageArray[currentPage - 1]}
        {selectedPageButton}
        {pageArray[currentPage + 1]}
        {'...'}
        {pageArray[pageArray.length - 1]}
        <PageButtonList>
          <PageButton type="button" onClick={() => forwardArrowClicked(search)}>
            {backArrow}
          </PageButton>
        </PageButtonList>
      </PageButtonUL>
    );
  }
}

export default Pages;
