import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import VirtualList from "react-tiny-virtual-list";

import CommentTable from "../CommentTable";

const mockComments = [
  {
    postId: 1,
    id: 1,
    email: "test@gmail.com",
    name: "susan",
    body: "testing susan's comment",
  },
];

const CommentTableTree = mount(
  <CommentTable comments={mockComments} onSortClick={() => {}} />
);

describe("<CommentTable />", () => {
  it("should render with <VirtualList />", () => {
    expect(CommentTableTree.find(VirtualList)).to.have.lengthOf(1);
    expect(CommentTableTree.find(".comment-table-row")).to.have.lengthOf(mockComments.length);
  });
});
