# Rootie

**Rootie** is an innovative CLI application made with Node.JS designed to visualize the structure of a chosen directory. With a user-friendly UI that utilizes vibrant colors and emojis, Rootie enhances visibility and easily distinguishes common design files.

Additionally, the app offers practical features such as clipboard saving and exporting to a text file, simplifying the process of documenting file structures.

## Features

- **Icon Management**: Easily manage different icon formats including ICO, PNG, and SVG.
- **File Handling**: Handle special files with specific requirements.
- **Cross-Platform Builds**: Create executable files for Windows, Linux, and macOS.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Ornitorink0/rootie.git
   cd rootie
   ```
2. **Install dependencies**:

   ```sh
   npm install
   ```

## Usage

### Start the Application

To start the application in development mode, run:

```sh
npm run start
```

### Compile the Application

To unify all the code into one file, run:

```sh
npm run build
```

### Usage tips

If it helps, create a `.bat` extension file and register it in the PATH. Add the following code inside it (to be modified according to your needs):

```sh
@echo off
:: edit with the relative path to the file
node path\to\your\directory\index.mjs %*
```

## Project Structure

```
rootie/
├── dist/        	 # Unified file directory
├── node_modules/        # Project dependencies
├── src/                 # Source files
│   ├── assets/          # Icon assets
│   ├── icons.mjs        # Icon management script
│   ├── index.mjs        # Main entry point
│   └── specialfiles.mjs # Special file handling script
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk): Terminal string styling.
- [clipboardy](https://www.npmjs.com/package/clipboardy): Access the system clipboard.
- [fs-extra](https://www.npmjs.com/package/fs-extra): File system operations.
- [inquirer](https://www.npmjs.com/package/inquirer): Command line user interfaces.
- [strip-ansi](https://www.npmjs.com/package/strip-ansi): Strip ANSI escape codes.

## Contributing

Contributions are welcome! Please create a pull request with a clear description of your changes.

## License

This project is licensed under the ISC License.
