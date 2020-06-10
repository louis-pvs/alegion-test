import React, { useState, useEffect } from "react";

import CommentTable from "./CommentTable";
import Loading from "./Loading";
import SearchField from "./SearchField";
import { getComment } from "./services";
import { filterComments, sortComments, SORTER } from "./utils";
import "./App.css";
import "./Icon.css";

const App = () => {
  const [requestError, setRequestError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);
  const [filteredComments, setFilteredComments] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [sortKey, setSortKey] = useState("");

  useEffect(() => {
    setLoading(true);
    getComment().then(([err, datas]) => {
      setLoading(false);
      if (err) setRequestError(err);
      else setComments(datas);
    });
  }, []);
  useEffect(() => {
    if (!comments || !searchTerm) {
      setFilteredComments(null);
      return;
    }
    const nextComments = filterComments(comments, searchTerm);
    setFilteredComments(nextComments);
  }, [searchTerm, comments, sortKey, sortDirection]);

  const onFilterChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  const onSortChange = (event) => {
    if (!event.currentTarget.dataset) return;
    const { sortKey: newSortKey } = event.currentTarget.dataset;
    const newSortDirection = sortDirection === "ASC" ? "DESC" : "ASC";
    if (newSortKey === sortKey) setSortDirection(newSortDirection);
    else {
      setSortDirection("ASC");
      setSortKey(newSortKey);
    }
  };

  function renderContent() {
    let sorter,
      commentList = filteredComments || comments;
    if (sortKey && sortDirection) {
      sorter = SORTER[`${sortKey}_${sortDirection}`];
    }
    if (sorter) {
      commentList = sortComments(commentList, sorter);
    }
    if (requestError) return <p>{requestError}</p>;
    else if (loading) return <Loading />;
    return (
      <>
        <SearchField onInputChange={onFilterChange} inputValue={searchTerm} />
        <CommentTable
          comments={commentList}
          onSortClick={onSortChange}
          sortDirection={sortDirection}
          sortKey={sortKey}
          searchTerm={searchTerm}
        />
      </>
    );
  }
  return (
    <div className="app">
      <h2 className="app__header">User Comments</h2>
      {renderContent()}
    </div>
  );
};

export default App;
