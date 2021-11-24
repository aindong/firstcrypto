// test/Box.test.js
// Load dependencies
const { expect } = require("chai");

// Load compiled artifacts
const Box = artifacts.require("Box");

// Start test block
contract("Box", () => {
  // Define test variables
  let box;

  // Define test functions
  beforeEach(async () => {
    // Deploy new instance of Box
    box = await Box.new();
  });

  // Test case: box.store() and box.retrieve()
  it("should return a value previously stored", async () => {
    // store value
    await box.store(42);

    // Check value
    expect((await box.retrieve()).toString()).to.equal("42");
  });
});
