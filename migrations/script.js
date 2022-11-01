// const MyToken = artifacts.require("MyToken")
const Voting = artifacts.require("Voting")

module.export = (deployer) => {
  // deployer.deploy(MyToken, 10000)
  deployer.deploy(Voting, 10000)
}
