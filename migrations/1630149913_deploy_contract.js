var DappToken = artifacts.require('./DappToken.sol')

module.exports = function(_deployer) {
    // Use deployer to state migration tasks.
    _deployer.deploy(DappToken);
};