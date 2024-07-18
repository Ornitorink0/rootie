import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import clipboardy from 'clipboardy';
import chalk from 'chalk';
import { ICONS } from './icons.mjs';
import { specialFiles } from './specialfiles.mjs';

// Define colors for different file types
const colors = {
    directory: chalk.blue,
    hidden_file: chalk.grey,
    special_file: chalk.yellow.bold,
};

/**
 * Gets the corresponding icon for the file type.
 * @param {string} fileType - Type of file or file extension.
 * @returns {string} Corresponding icon.
 */
const getIcon = (fileType) => ICONS[fileType] || ICONS.file;

/**
 * Prints the directory structure recursively with icons and colors.
 * @param {string} rootDir - Root directory to explore.
 * @param {string} [prefix=''] - Prefix to add to each line of output.
 * @param {boolean} [colored=false] - If true, apply colors to text.
 * @returns {string} Output of the directory structure.
 */
const printDirectoryTree = (rootDir, prefix = '', colored = false) => {
    let output = '';
    try {
        const items = fs.readdirSync(rootDir).sort();

        items.forEach((item, i) => {
            const itemPath = path.join(rootDir, item);
            const isLast = i === items.length - 1;
            let icon = getIcon('file');
            let colorize = (text) => text; // Default function for no coloring

            if (fs.statSync(itemPath).isDirectory()) {
                icon = getIcon('directory');
                colorize = colors.directory;
            } else if (item.startsWith('.')) {
                icon = getIcon('hidden_file');
                colorize = colors.hidden_file;
            } else {
                const ext = path.extname(item).toLowerCase();
                icon = getIcon(ext);
            }

            if (specialFiles.includes(item.toUpperCase()) || specialFiles.includes(item)) {
                colorize = colors.special_file;
                icon = getIcon(item.toUpperCase());
            }

            if (colored) {
                output += `${prefix}${isLast ? '└── ' : '├── '}${colorize(icon)} ${colorize(item)}\n`;
            } else {
                output += `${prefix}${isLast ? '└── ' : '├── '}${icon} ${item}\n`;
            }

            if (fs.statSync(itemPath).isDirectory()) {
                const newPrefix = prefix + (isLast ? '    ' : '│   ');
                output += printDirectoryTree(itemPath, newPrefix, colored);
            }
        });
    } catch (error) {
        console.error(chalk.red(`Error: ${error.message}`));
    }
    return output;
};

/**
 * Main function that handles user interaction via Inquirer.
 */
const main = async () => {
    try {
        const { directory } = await inquirer.prompt([
            {
                type: 'input',
                name: 'directory',
                message: 'Enter the directory to list',
                default: '.',
            },
        ]);

        if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
            throw new Error(`Invalid directory: '${directory}' is not a directory`);
        }

        console.log(`\n🌳 Directory structure of '${directory}':\n`);
        const directoryStructure = printDirectoryTree(directory, '', true);
        console.log(directoryStructure);

        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: [
                    { name: 'Copy the output text', value: 'copy' },
                    { name: 'Export to a TXT file', value: 'export' },
                    { name: 'No action', value: 'none' }
                ],
            },
        ]);

        if (action === 'copy') {
            clipboardy.writeSync(printDirectoryTree(directory));
            console.log(chalk.green('✔️ Text copied to clipboard!'));
        } else if (action === 'export') {
            const filePath = path.join(directory, 'directory_structure.txt');
            fs.writeFileSync(filePath, printDirectoryTree(directory));
            console.log(chalk.green(`✔️ Directory structure exported to ${filePath}`));
        } else {
            console.log(chalk.yellow('No action selected.'));
        }
    } catch (err) {
        console.error(chalk.red(`Error during user interaction: ${err.message}`));
    }
};

// Start executing the main function
main();
