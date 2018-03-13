const chai = require("chai");
const expect = chai.expect;
const Lookup = require("../../source/us_autocomplete/lookup");
const errors = require("../../source/errors");

describe("A US Autocomplete Lookup", function () {
	it("can be newed up with a prefix.", function () {
		const expectedPrefix = "a";
		let lookup = new Lookup(expectedPrefix);
		expect(lookup.prefix).to.equal(expectedPrefix);
	});
});