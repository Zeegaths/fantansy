# Fantasy Sports AI Simulation

## Overview

Fantasy sports are often more "sports" than "fantasy." This project reimagines fantasy sports by introducing autonomous AI players with dynamic skills and personalities. Two new fantasy sports teams will be created, each featuring players with attributes like speed, shot power, and accuracy. These players will be powered by Eliza and interact autonomously in a dynamic and evolving gameplay environment.

## Features

### AI Player Agents
Instead of just static players, each player will is an autonomous AI agent powered by Eliza. These agents will have the ability to:
- Develop their skills based on training and match performance.
- Exhibit dynamic personalities that influence their performance and the team's chemistry.
- Make autonomous decisions during matches, adjusting based on their attributes and game situation.
- Interact with other player agents to form team dynamics.

### Scouting Agent System
AI agents will act as scouts to:
- Analyze player agents and provide detailed performance reports.
- Recommend optimal team composition and tactics.
- Help discover undervalued players for trading and team improvements.

### Manager Agent Assistant
Each user will have an AI agent assistant that will help them manage their team. This agent will:
- Provide strategic advice for upcoming matches.
- Suggest training programs for player development.
- Manage negotiations with other teams' agents for trades.

### Random Sequence Game
This game will use a Linear Congruential Generator (LCG) for generating a fixed sequence of steps within the fantasy game. A Verifiable Random Function (VRF) is used to seed the sequence in a commit-reveal design pattern, simulating the game. The steps of the simulation will be posted on the blockchain and verified using the VRF seed.

## Track Integration
- Player NFTs ae created as tradeable assets.
- Smart contracts are deployed on the Starknet for:
  - Player agent creation and attribute storage.
  - Match resolution and scoring.
  - Tournament management.
  - Trading system for player agents.




---

**Note:** This project uses the Eliza AI framework to power player behavior and decision-making.
