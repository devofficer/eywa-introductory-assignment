## Installation and Running

Run the following commands to clone and run the repository.

`git clone <git repo URL>`

`cd <repo name>`

`npm install`

`npm start`

## Coding Challenge Requirements

- Necessary to use React, MobX, emotion.js.
- Push this cloned repo to your own, _personal_, Github/Gitlab account.
- Submit your _personal_ repo URL when finished your assignment.
- Deploy the project to github pages.  
- Make at least one commit, demonstrating how to write a good commit message.
- This coding challenge should not take more than 1-3 hours.

[Design here](https://www.figma.com/file/3TosUvbudovwl9dXjGE7Zl/Untitled?node-id=0%3A1)

# React/Mobx

## Task 1

Implement an interface for connecting a wallet.

## Task 2

Implement synchronization of token balances. Token details provided below.

## Task 3

Implement an interface for minting tokens

# Attachments for RINKEBY (chain id 4)
## Mint ABI

`
[
    {
        inputs: [
        {
            internalType: 'address',
            name: 'rec',
            type: 'address',
        },
        {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
        },
    ],
    name: 'mint',
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    },
]
`

# Tokens

EYWA `0x08Ffcb0Ca216Bb3C12855910Ee4014191D81eeba`

USDT `0xa9E233E2c06fbAFf7d1D913060d5F4e159092414`

# Notes

Your work will be judged based on these factors:

1. Does it run without errors?
2. Is the code clean and easy to understand?
3. Is the code easy to extend?
4. Does the code follow best practices?

If you have extra time and energy, feel free to add a feature of your own design. It will be taken into strong consideration.


Please provide feedback if any errors or bugs are encountered in this repo. We want to make your coding challenge as painless as possible.

- EYWA Dev Team