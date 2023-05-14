const { expect } = require("chai");

describe("Voting", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Voting");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  }
});
