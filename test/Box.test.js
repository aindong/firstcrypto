// test/Box.test.js
// Load dependencies
const { accounts, contract } = require("@openzeppelin/test-environment");
const { expect } = require("chai");

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

// Load compiled artifacts
const Box = contract.fromArtifact("Box");

// Start test block
describe("Box", () => {
  const [owner, other] = accounts;
  // use large integers
  const value = new BN("42");

  // Define test functions
  beforeEach(async () => {
    // Deploy new instance of Box
    this.box = await Box.new({ from: owner });
  });

  // Test case: box.store() and box.retrieve()
  it("should return a value previously stored", async () => {
    // store value
    await this.box.store(value, { from: owner });

    // Check value
    expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  });

  it("emites a ValueChanged event after store", async () => {
    // store value
    const receipt = await this.box.store(value, { from: owner });

    // Check value
    expectEvent(receipt, "ValueChanged", { value: value });
  });

  it("should not allow non owner to store a value", async () => {
    // store value
    await expectRevert(
      this.box.store(value, { from: other }),
      "Ownable: caller is not the owner"
    );
  });
});
