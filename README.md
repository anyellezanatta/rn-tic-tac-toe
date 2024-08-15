# Tic-Tac-Toe

It is a classic Tic-Tac-Toe game you can play with one or two players.

### Expected behaviour

- You can choose to make the default screen either the new game menu or the solo player game board. Note that we're using the solo player game board for the design screenshot, so if you choose the new game menu it won't match up in the design comparison slider. This isn't a big deal, but is something worth considering.
- On the new game screen, whichever mark isn't selected for the first player is automatically assigned to the second player when the game is started.
- The first turn of the first round is always played by whoever is playing as X. For every following round, the first turn alternates between O and X.
- After a round, if the player chooses to quit the game, they should be taken back to the new game menu.
- If the restart icon in the top right is clicked, the "Restart game?" modal should show and allow the player to reset the game or cancel and continue to play.

## Running

Before running the project you must install packages using yarn. There shouldn't be the need to install pods as there's a postinstall script that does that for you.

```bash
yarn
```

To run one of the platforms simply:

```bash
yarn ios
yarn android
```

## Linting, Formatting and Type Checking

To ensure the code quality, the project is configured with standard tooling that is used in any mature project. That is ESlint, Prettier and Typescript. There are useful tasks that help ensure the project is following its standards. You can run them individually as needed.

```bash
yarn compile
yarn lint
yarn format
yarn test
```

## Technical stack

- Expo
- React Native
- Typescript
- React Native Unistyles
- Redux
- Expo-router
- StoryBook
- React Native Testing Library
- Jest
