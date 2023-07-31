import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('')
  const [showBookList, setShowBookList] = useState(false);



  function handleSearch(e) {
    setSearch(e.target.value)
    setShowBookList(true)
  }

  function exitSearch() {
    setShowBookList(false)
    setFilteredData([])
    setSearch('')
  }

  useEffect(()=>{
    const filteredSearch = data.filter(book=>((book.title).toLowerCase()).includes(search.toLowerCase()))
    setFilteredData(filteredSearch)
  }, [search, filteredData])

  const bookData = filteredData.map((book, key) => (
    <div key={key} className="book-details">
      <div className="book">
        <a href={book.link} target="_blank" className="book-title">
          {book.title}
        </a>
      </div>
    </div>
  ));

  return (
    <div className="search">
      <div className="search-container">
        <input
          type="text"
          className="searchInput"
          placeholder={placeholder}
          onChange={handleSearch}
          value={search}
        />

        <div className="search-icons">
          {showBookList ? (
            <FontAwesomeIcon
              icon={faClose}
              className="icon"
              onClick={exitSearch}
            />
          ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          )}
        </div>
      </div>
      { showBookList && <div className="bookList">{bookData}</div>}
    </div>
  );
};

export default SearchBar;
