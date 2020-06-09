import React from "react";
import axios from "axios";
import { act } from "react-dom/test-utils";

import { mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import App from "../App";
import { flushRequestsAndUpdate } from "../testUtils";

const mountApp = () => mount(<App />);
const emptyPromise = () =>
  new Promise((resolve) =>
    resolve({
      data: [],
      statusText: "testing",
      status: 200,
    })
  );

describe("<App />", () => {
  let sandbox;
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore());

  it("should render <App /> with header", async () => {
    const wrapper = mountApp();
    await act(async () => {
      await flushRequestsAndUpdate(wrapper);
    });
    expect(wrapper.find(".app__header").text()).to.equal("User Comments");
  });
  it("should render <Loading /> before getting response from API", async () => {
    sandbox.stub(axios, "get").returns(emptyPromise());
    const wrapper = mountApp();

    expect(wrapper.find(".loader")).to.have.lengthOf(1);
    expect(wrapper.find(".comment-table")).to.have.lengthOf(0);

    await act(async () => {
      await flushRequestsAndUpdate(wrapper);
    });
  });
  it("should render <SearchField /> after receiving response from API", async () => {
    sandbox.stub(axios, "get").returns(emptyPromise());
    const wrapper = mountApp();
    expect(wrapper.find(".loader")).to.have.lengthOf(1);

    await act(async () => {
      await flushRequestsAndUpdate(wrapper);
    });

    expect(wrapper.find(".loader")).to.have.lengthOf(0);
    expect(wrapper.find(".search-field__label")).to.have.lengthOf(1);
  });
  it("should render <CommentTable /> after receiving response from API", async () => {
    sandbox.stub(axios, "get").returns(emptyPromise());
    const wrapper = mountApp();
    expect(wrapper.find(".loader")).to.have.lengthOf(1);

    await act(async () => {
      await flushRequestsAndUpdate(wrapper);
    });

    expect(wrapper.find(".loader")).to.have.lengthOf(0);
    expect(wrapper.find(".comment-table")).to.have.lengthOf(1);
  });
});
