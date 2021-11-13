<!-- README copied from https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/README.md -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DWC01/dapp-sandbox-contracts">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">DApp Sandbox Contracts</h3>

  <p align="center">
    A set of experimental smart contracts for practicing Solidity development.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<br/>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>
<br/>

<!-- ABOUT THE PROJECT -->

## About The Project

This project holds set of experimental smart contracts just used to better learn how to develop with Solidity and create DApps on Ethereum (or any EVM compatible smart contract platform).

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Hardhat](https://hardhat.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Yarn](https://yarnpkg.com/)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)
-   [solhint](https://github.com/protofire/solhint)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   Node LTS version

    Suggestion to manage with [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)

-   Yarn
    ```sh
    npm install --global yarn
    ```

### Installation

1. Clone the repo
    ```sh
    git clone git@github.com:DWC01/dapp-sandbox-contracts.git
    ```
2. Install NPM packages
    ```sh
    yarn
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
-   Linting
    ```sh
    yarn lint
    ```
-   Compiling Contracts
    ```sh
    yarn compile
    ```
-   Running Tests
    ```sh
    yarn test
    ```
-   Start a JSON-RPC server on top of Hardhat Network
    ```sh
    yarn start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>
