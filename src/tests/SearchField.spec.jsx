import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import SearchField from "../SearchField";

const renderTree = (props) => shallow(<SearchField {...props} />);
const mockInput = { target: { value: "spy test" } }

describe("<SearchField />", () => {
  it("onInputChange callback get called with correct arguement", () => {
    const spy = sinon.spy();
    const tree = renderTree({ inputValue: "", onInputChange: spy });
    tree.find("input").at(0).simulate("change", mockInput);
    expect(spy.calledWith(mockInput)).to.be.true;
    expect(spy).to.have.property("callCount", 1);
  });
});
