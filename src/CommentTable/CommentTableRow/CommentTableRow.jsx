import React from "react";
import propTypes from "prop-types";
import "./CommentTableRow.css";

export const CommentTableRow = ({
  virtualListIndex,
  virtualListStyle,
  comment,
  highlight,
}) => {
  const highlightContent = (content) => {
    if (!highlight) return content;
    const strArr = content.split(highlight);
    const joinArr = strArr.map((str, index) => (
      <>
        {str}
        {index >= strArr.length - 1 ? null : (
          <strong className="comment-table-row__highlight">
            {highlight}
          </strong>
        )}
      </>
    ));
    return joinArr;
  };
  return (
    <div
      id={virtualListIndex}
      className="comment-table-row"
      style={virtualListStyle}
    >
      <div className="comment-table-row__col comment-table-row__col--email">
        {highlightContent(comment.email)}
      </div>
      <div className="comment-table-row__col comment-table-row__col--body">
        {highlightContent(comment.body)}
      </div>
    </div>
  );
};

CommentTableRow.propTypes = {
  virtualListIndex: propTypes.number.isRequired,
  virtualListStyle: propTypes.object.isRequired,
  comment: propTypes.shape({
    postId: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
    name: propTypes.string,
    email: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
  }).isRequired,
};
