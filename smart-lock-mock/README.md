# Cohabs Mobile Challenge - Smart Lock Mock

## Overview
This project is called **Cohabs Mobile Challenge - Smart Lock Mock** and its objective is to mimic a generic smart lock API.
It also mimics random failures. About 20% of the requests will return an error message.

## The stack
These are the main dependencies of this project:

- Node
- Express
- Babel
- Chai
- Mocha

## How to install 
### Requirements
It is required to have **git** and **npm** to clone the repository and install the code.

Also, please note that this service needs the port `4001` to be free. Alternatively you can change it on the config file:

- config/default.json

### Installation instructions
1. Clone the repository (if you haven't done it yet):

`git clone https://github.com/cohabs/mobile-challenge.git`

2. Go to the project folder:

`cd mobile-challenge`

3. Install the service:

`npm install --prefix ./smart-lock-mock`

4. Start the service on *dev* mode:

`npm start --prefix ./smart-lock-mock`
