import {
  sortComments,
  emailAscSorter,
  emailDescSorter,
  commentAscSorter,
  commentDescSorter,
} from "./sortComments";
import { filterComments } from "./filterComments";

const SORTER = {
  EMAIL_ASC: emailAscSorter,
  EMAIL_DESC: emailDescSorter,
  COMMENT_ASC: commentAscSorter,
  COMMENT_DESC: commentDescSorter,
};

export { sortComments, SORTER, filterComments };
