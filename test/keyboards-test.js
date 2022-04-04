const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Keyboards", function () {
  it("Shouldn't return the keyboard list", async function () {
    const Keyboards = await ethers.getContractFactory("Keyboards");
    const keyboards = await Keyboards.deploy();
    await keyboards.deployed();

    expect(await keyboards.getKeyboards()).to.have.lengthOf(0);

   // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
  //  await setGreetingTx.wait();

   // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
