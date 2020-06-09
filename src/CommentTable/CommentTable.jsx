import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import CommentTableRow from "./CommentTableRow";
import VirtualList from "react-tiny-virtual-list";
import "./CommentTable.css";

export const CommentTable = ({
  comments,
  onSortClick,
  sortKey,
  sortDirection,
  searchTerm,
}) => {
  if (!comments) return null;
  return (
    <div className="comment-table">
      <div className="comment-table__header-row">
        <div className="comment-table__header-row__col comment-table__header-row__col--email">
          <button
            className="comment-table__header-btn"
            data-sort-key="EMAIL"
            onClick={onSortClick}
          >
            <i
              className={classnames({
                "comment-table__header-btn__icon": true,
                icon: true,
                "icon-sort-alpha": sortKey !== "EMAIL" || !sortDirection,
                "icon-sort-alpha--desc":
                  sortKey === "EMAIL" && sortDirection === "DESC",
                "icon-sort-alpha--asc":
                  sortKey === "EMAIL" && sortDirection === "ASC",
              })}
            ></i>
            <span className="comment-table__header-btn__span">Email</span>
          </button>
        </div>
        <div className="comment-table__header-row__col comment-table__header-row__col--body">
          <button
            className="comment-table__header-btn"
            data-sort-key="COMMENT"
            onClick={onSortClick}
          >
            <i
              className={classnames({
                "comment-table__header-btn__icon": true,
                icon: true,
                "icon-sort-alpha": sortKey !== "COMMENT" || !sortDirection,
                "icon-sort-alpha--desc":
                  sortKey === "COMMENT" && sortDirection === "DESC",
                "icon-sort-alpha--asc":
                  sortKey === "COMMENT" && sortDirection === "ASC",
              })}
            ></i>
            <span className="comment-table__header-btn__span">Comment</span>
          </button>
        </div>
      </div>
      <VirtualList
        width="100%"
        height={500}
        itemCount={comments.length || 0}
        itemSize={50}
        renderItem={({ index, style }) => (
          <CommentTableRow
            highlight={searchTerm}
            virtualListIndex={index}
            virtualListStyle={style}
            key={comments[index].id}
            comment={comments[index]}
          />
        )}
      />
    </div>
  );
};

CommentTable.propTypes = {
  onSortClick: propTypes.func.isRequired,
  sortDirection: propTypes.string,
  sortKey: propTypes.string,
  comments: propTypes.arrayOf(
    propTypes.shape({
      postId: propTypes.number,
      id: propTypes.number,
      name: propTypes.string,
      email: propTypes.string,
      body: propTypes.string,
    }).isRequired
  ),
};
