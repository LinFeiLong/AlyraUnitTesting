const Voting = artifacts.require("../contracts/Voting.sol")
const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers")
const { not } = require("@openzeppelin/test-helpers/src/expectEvent")
const { expect } = require("chai")

contract("Voting", (accounts) => {
  const _owner = accounts[0]
  const _second = accounts[1]
  const _third = accounts[2]

  let VotingInstance

  beforeEach(async function () {
    VotingInstance = await Voting.new({ from: _owner })
  })

  describe("getVoter", function () {
    it("should get a voter", async () => {
      // On ajoute l'owner en tant qu' electeur car la fonction getVoter
      // ne peut être utilisé que par un electeur
      await VotingInstance.addVoter(_owner)

      // On vérifie que l'owner fait partie de la liset des electeurs
      const findEvent = await VotingInstance.getVoter(_owner)

      // On est sensé trouvé un resultat
      expect(response).not.to.be.false
    })

    it("should not get a voter", async () => {
      // On ajoute l'owner en tant qu' electeur car la fonction getVoter
      // ne peut être utilisé que par un electeur
      await VotingInstance.addVoter(_owner)

      // On vérifie que _second fait partie de la liset des electeurs
      const response = await VotingInstance.getVoter(_second)

      // On est sensé trouvé un resultat
      expect(response).to.be.false
    })
  })
})
