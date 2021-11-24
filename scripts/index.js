// scripts/index.js
module.exports = async function main(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const Box = artifacts.require("Box");
    const box = await Box.deployed();

    const value = await box.retrieve();
    console.log("Box value is: ", value.toString());

    await box.store(23);
    const newValue = await box.retrieve();
    console.log("New Box value is: ", newValue.toString());

    callback(0);
  } catch (e) {
    console.error(e);
    callback(1);
  }
};
