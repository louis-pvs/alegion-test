import axios from "axios";
import sinon from "sinon";
import { expect } from "chai";

import { getComment } from "../services";
import { providedAPI } from "../CONSTANTS";

const emptyPromise = () =>
  new Promise((resolve) =>
    resolve({
      data: [],
      statusText: "testing",
      status: 200,
    })
  );

describe("function getComment()", () => {
  const sandbox = sinon.createSandbox();

  it("should make AJAX call with axios with the API provided", (done) => {
    sandbox.stub(axios, "get").returns(emptyPromise());
    getComment()
      .then(() => {
        expect(axios.get.getCall(0).args[0]).to.equal(providedAPI);
      })
      .then(done);
  });
});
