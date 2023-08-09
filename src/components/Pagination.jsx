import React, { useState, useContext } from "react";
import { PokemonContext } from "../App";


const Pagination = ({ PaginationData }) => {
  let pages = [];
  let itemsPerPage = 20;
  let [currentPage, setCurrentPage] = useState(1);

  let [pageNumberLimit, setPageNumberLimit] = useState(5);
  let [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  let [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  let { setOffset } = useContext(PokemonContext);

  for (let i = 1; i <= Math.ceil(PaginationData.count / itemsPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);

  let handleClick = (e) => {
    console.log(e.target.id);
    setCurrentPage(Number(e.target.id));
    setOffset(Number(e.target.id) * itemsPerPage);
  };

  let handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    let removeOffset = currentPage * itemsPerPage;
    setOffset(removeOffset - itemsPerPage);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    setOffset(currentPage * itemsPerPage);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={handleNextBtn}>
        <a class="page-link">&hellip;</a>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li onClick={handlePrevBtn}>
        <a class="page-link">&hellip;</a>
      </li>
    );
  }

  const renderPageNumbers = pages.map((number) => {
    if (number > minPageNumberLimit && number < maxPageNumberLimit + 1) {
      return (
        <li
          className={`page-item pointer ${
            currentPage === number ? "active" : null
          }`}
        >
          <a class="page-link" id={number} onClick={handleClick}>
            {number}
          </a>
        </li>
      );
    }
  });
  return (
    <div>
      <nav
        aria-label="Page navigation example"
        class="d-flex justify-content-center m-4"
      >
        <ul class="pagination">
          <li class="page-item">
            <a
              class={`page-link ${currentPage === pages[0] && "disabled"}`}
              onClick={handlePrevBtn}
            >
              Previous
            </a>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li class="page-item" onClick={handleNextBtn}>
            <a
              class={`page-link ${
                currentPage === pages[pages.length - 1] && "disabled"
              }`}
              onClick={handleNextBtn}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
