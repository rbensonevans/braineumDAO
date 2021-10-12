// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// BraineumVCDAO Token.
// initial supply: 100 billion tokens.
// 100000000000 * 10^18
// 100000000000000000000000000000

contract BraineumVCToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("BraineumVCToken", "BRVC") {
        _mint(msg.sender, initialSupply);
    }
}