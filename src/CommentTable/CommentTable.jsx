import React, { useEffect } from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import CommentTableRow from "./CommentTableRow";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

import "./CommentTable.css";

let cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 50,
});

export const CommentTable = ({
  comments,
  onSortClick,
  sortKey,
  sortDirection,
  searchTerm,
}) => {
  useEffect(() => {
    cache.clearAll();
  }, [searchTerm, sortKey, sortDirection]);
  if (!comments) return null;
  const renderRow = ({ index, key, style, parent }) => (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <CommentTableRow
        highlight={searchTerm}
        virtualListStyle={style}
        virtualListIndex={index}
        comment={comments[index]}
      />
    </CellMeasurer>
  );

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
      <div className="comment-table__body">
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                width={width}
                height={height}
                rowCount={comments.length}
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                rowRenderer={renderRow}
                overscanRowCount={3}
              ></List>
            );
          }}
        </AutoSizer>
      </div>
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
