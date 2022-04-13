
const hre = require("hardhat");

async function main() {


  // We get the contract to deploy
  const ContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await ContractFactory.deploy();

  await keyboardsContract.deployed();
  console.log("Keyboards deployed to:", keyboardsContract.address);
  
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  