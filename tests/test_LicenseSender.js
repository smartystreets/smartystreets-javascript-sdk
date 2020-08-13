const chai = require("chai");
const expect = chai.expect;
const LicenseSender = require("../src/LicenseSender");
const Request = require("../src/Request");
const Promise = require("promise");

describe("A license sender", function () {
	let innerSender;
	let request;
	let licenses;
	let licenseSender;

	beforeEach(() => {
		innerSender = {
			send: () => true
		};
		request = new Request();

	});

	it("appends licenses to parameters.", function () {
		licenses = ["0","1","2"];
		licenseSender = new LicenseSender(innerSender, licenses);
		licenseSender.send(request);

		expect(request.parameters).contains({"licenses":"0,1,2"});
	});

	it("doesn't append license to query if array is empty.", function () {
		licenses = [];
		licenseSender = new LicenseSender(innerSender, licenses);
		licenseSender.send(request);
		expect(request.parameters).to.not.have.property("licenses");
	});

	it("returns a promise.", function () {
		expect(licenseSender.send(request) instanceof Promise).to.equal(true);
	});
});