/**
 *
 * @param {[]} comments
 * @param {string} searchTerm
 * @returns {[]}
 */
export const filterComments = (comments, searchTerm) => {
  let filteredComments = [];
  const lowerCaseSerachTerm = searchTerm.toLowerCase();
  comments.forEach((comment) => {
    if (
      comment.email.toLowerCase().indexOf(lowerCaseSerachTerm) > -1 ||
      comment.body.toLowerCase().indexOf(lowerCaseSerachTerm) > -1
    ) {
      filteredComments.push(comment);
    }
  });
  return filteredComments;
};
