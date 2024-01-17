# ALTERCALL Web

## Installation

To get started with the ALTERCAL Web project, follow the steps below:

1. **Install Yarn:**
   If you don't have Yarn installed globally, you can install it using the following command:

   ```sh
   npm install --global yarn
   ```

2. **Install Dependencies:**
   Run the following command to install project dependencies:
   ```sh
   yarn
   ```

## Development

To run the app in development mode, use the following command:

```sh
yarn start
```

This will launch the application at [http://localhost:3000](http://localhost:3000) in your default web browser.

## VS Code Setup

If you prefer using Visual Studio Code as your primary frontend code editor, consider installing the following extensions for a smoother development experience:

- **Prettier - Code Formatter**
- **ESLint**

Configure your editor settings using the instructions below (User settings JSON or Workspace settings JSON):

```json
"settings": {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "stylelint.validate": ["css", "less", "postcss", "scss"],
  "[json][javascriptreact][javascript][typescriptreact][typescript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```

With these settings, ESLint issues will be automatically fixed on save, and your code will be formatted using Prettier without manual adjustments.

Feel free to adjust these configurations based on your personal preferences.

## Additional Information

- This project is a React-based front end for ALTERCAL.
- Make sure to check the [documentation](#) for detailed information about project structure, components, and functionality.
- If you encounter any issues or have questions, please refer to the [issue tracker](#) or [contribution guidelines](#) for assistance.

Happy coding!
