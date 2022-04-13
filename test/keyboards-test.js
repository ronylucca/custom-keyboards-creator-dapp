const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Keyboards", function () {
  it("Shouldn't return the keyboard list", async function () {
    const Keyboards = await ethers.getContractFactory("Keyboards");
    const keyboards = await Keyboards.deploy();
    await keyboards.deployed();

    expect(await keyboards.getKeyboards()).to.have.lengthOf(0);

  });

  it("Should return the keyboard list with one in total", async function () {
    const Keyboards = await ethers.getContractFactory("Keyboards");
    const keyboards = await Keyboards.deploy();
    await keyboards.deployed();

    const keyboardTx = await keyboards.create("A nice keyboard!");
    await keyboardTx.wait();

    expect(await keyboards.getKeyboards()).to.have.lengthOf(1);
  });
});
