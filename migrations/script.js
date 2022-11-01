const MyToken = artifacts.require("MyToken")

module.export = (deployer) => {
  deployer.deploy(MyToken, 10000)
}
