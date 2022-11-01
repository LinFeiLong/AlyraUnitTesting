const Voting = artifacts.require("../contracts/Voting.sol")
const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers")
const { not } = require("@openzeppelin/test-helpers/src/expectEvent")
const { expect } = require("chai")

contract("Voting", (accounts) => {
  const _owner = accounts[0]

  let VotingInstance

  beforeEach(async function () {
    VotingInstance = await Voting.new()
    // VotingInstance.voters[_owner].isRegistered = true
  })
  it("has a default workflowStatus set to RegisteringVoters", async () => {
    const status = await VotingInstance.workflowStatus()
    const WorkflowStatus = VotingInstance.constructor.WorkflowStatus

    expect(status).to.be.bignumber.equal(
      new BN(WorkflowStatus.RegisteringVoters)
    )
  })

  it("can change state", async () => {
    // it("changes state", async () => {
    //   expect(await VotingInstance.workflowStatus()).to.be.bignumber.equal(
    //     new BN(
    //       VotingInstance.constructor.WorkflowStatus.ProposalsRegistrationStarted
    //     )
    //   )
    // })
    // it("sets workflowStatus to ProposalsRegistrationEnded", async () => {
    //   expect(await VotingInstance.workflowStatus()).to.be.bignumber.equal(
    //     new BN(
    //       VotingInstance.constructor.WorkflowStatus.ProposalsRegistrationEnded
    //     )
    //   )
    // })
    // it("sets workflowStatus to VotingSessionStarted", async () => {
    //   expect(await VotingInstance.workflowStatus()).to.be.bignumber.equal(
    //     new BN(VotingInstance.constructor.WorkflowStatus.VotingSessionStarted)
    //   )
    // })
    // it("sets workflowStatus to VotingSessionEnded", async () => {
    //   expect(await VotingInstance.workflowStatus()).to.be.bignumber.equal(
    //     new BN(VotingInstance.constructor.WorkflowStatus.VotingSessionEnded)
    //   )
    // })
    // it("sets workflowStatus to VotesTallied", async () => {
    //   expect(await VotingInstance.workflowStatus()).to.be.bignumber.equal(
    //     new BN(VotingInstance.constructor.WorkflowStatus.VotesTallied)
    //   )
    // })
  })

  // it("can add a voter", async () => {
  //   expect(await VotingInstance.getVoter(_owner)).to.be.equal(null)
  // })
})
