// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// NFZillionaire Token.
// initial supply: 10 billion tokens.
// 10000000000 * 10^18
// 10000000000000000000000000000

contract NFZillionaireToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("NFZillionaireToken", "NFZT") {
        _mint(msg.sender, initialSupply);
    }
}