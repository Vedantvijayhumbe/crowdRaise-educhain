require("@nomicfoundation/hardhat-ignition-ethers"); 
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StudyDAO", (v) => {
  const studyDAO = v.contract("StudyDAO");

  return { studyDAO };
});
