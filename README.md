# React Native tic-tac-toe game

It is a classic tic-tac-toe game you can play with one or two players.

<img src="https://github.com/user-attachments/assets/b503f07f-579b-4676-97ef-a041451a7607" alt="Game Demo" width="240"/>

## Technical stack

- Expo
- React Native
- Typescript
- React Native Unistyles
- Redux Toolkit
- Expo-router
- StoryBook
- Jest
- React Native Testing Library
- Maestro (E2E)

## Running

Before running the project you must install packages using yarn.

```bash
yarn
```

To run one of the platforms simply:

```bash
yarn ios
yarn android
```

## Running unit and component tests

The project is equipped with testing capabilities using Jest and React Native Testing Library for thorough component testing. The codebase maintains over 80% test coverage, ensuring solid reliability. You can run tests with:

```bash
yarn test
```

## E2E Tests

Run the tests with:

```bash
yarn test:e2e
```

The tests are done with `maestro`, a popular and easy to use framework for writing this type of test in React Native. The main app flows are covered with e2e tests.

## Linting, Formatting and Type Checking

To ensure the code quality, the project is configured with standard tooling that is used in any mature project. That is ESlint, Prettier and Typescript. There are useful tasks that help ensure the project is following its standards. You can run them individually as needed.

```bash
yarn compile
yarn lint
yarn format
```

### Pre-commit checks / Commit-message checks

Husky, a tool to integrate with git hooks is used for ensuring extra code quality for commit messages (via `commitlint`) and running all the checks before commit (formatting, linters and testing).

## Project Structure

This project is designed to be simple yet scalable, with an organized structure to accommodate future growth, even if not currently required.
The outer `app` folder contains reusable parts that are foundational across the entire application, such as core components, basic hooks, and store configuration.
The `features` folder contains the many features present in the project, in this case, a single "game" feature.

### Folder Overview:

- **app**: Contains the app’s routes (screens).
- **hooks**: Houses generic hooks that can be reused throughout the app.
- **store**: Contains only the Redux store configuration, with no specific logic.
- **theme**: Defines theming for the app, such as sizes, colors, and other design tokens.
- **features**: A modular collection of the app’s features. Each feature is self-contained, like a mini-project that can consume resources from outside but remains isolated. Each feature can have its own components, store, services, and hooks.

## Components

The `components` folder holds design system components, such as buttons or text fields. These are abstract, reusable UI elements without application-specific logic, organized to scale easily. Each component is accompanied by:

- **Storybook Stories**: `{Component}.stories.tsx` – where you can preview and test component behavior.
- **Tests**: `{Component}.test.tsx` – unit tests for the component.

## Storybook

As an additional feature, the project includes a Storybook setup, which can be accessed via the developer menu. This provides an interactive view of all design system components, allowing you to play with props and inspect how components behave. This feature acts as both developer documentation and a design reference.

To access Storybook, open the developer menu while running the app in a simulator.

## State Management

The game’s state management uses modern Redux Toolkit based practices. The logic is fully separated from the components, making it easier to test and maintain. Key Redux Toolkit features used in the project include:

- **Slices**: For modular state management, with typed actions, reducers, and selectors.
- **Listener Middleware**: For reacting to state changes and managing side effects efficiently.

## Error handling

The project uses an error boundary to catch unhandled rendering errors, displaying a fallback UI. Besides that, it would easily integrate with an SDK like Sentry for error reporting.

## Typescript

A stricter typescript configuration that includes "noUncheckedIndexAccess" enabled project-wide, for extra safety. No "any" usage.
