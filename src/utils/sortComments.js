export const emailAscSorter = (a, b) =>
  a.email < b.email ? -1 : b.email > a.email ? 1 : 0;
export const emailDescSorter = (a, b) =>
  b.email < a.email ? -1 : a.email > b.email ? 1 : 0;
export const commentAscSorter = (a, b) =>
  a.body < b.body ? -1 : b.body > a.body ? 1 : 0;
export const commentDescSorter = (a, b) =>
  b.body < a.body ? -1 : a.body > b.body ? 1 : 0;
export const sortComments = (comments, sorter) => comments.sort(sorter);
