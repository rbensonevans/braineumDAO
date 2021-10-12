// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// BraineumDAO Token.
// initial supply: 1 million tokens.
//1000000 * 10^18
//1000000000000000000000000

contract BraineumDT is ERC20 {
    constructor(uint256 initialSupply) ERC20("BraineumDT", "BRDT") {
        _mint(msg.sender, initialSupply);
    }
}