import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 711:
/***/ ((module) => {

module.exports = eval("require")("chalk");


/***/ }),

/***/ 116:
/***/ ((module) => {

module.exports = eval("require")("clipboardy");


/***/ }),

/***/ 785:
/***/ ((module) => {

module.exports = eval("require")("inquirer");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");
// EXTERNAL MODULE: C:\Users\matte\AppData\Roaming\npm\node_modules\@vercel\ncc\dist\ncc\@@notfound.js?inquirer
var C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundinquirer = __nccwpck_require__(785);
// EXTERNAL MODULE: C:\Users\matte\AppData\Roaming\npm\node_modules\@vercel\ncc\dist\ncc\@@notfound.js?clipboardy
var C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundclipboardy = __nccwpck_require__(116);
// EXTERNAL MODULE: C:\Users\matte\AppData\Roaming\npm\node_modules\@vercel\ncc\dist\ncc\@@notfound.js?chalk
var C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk = __nccwpck_require__(711);
;// CONCATENATED MODULE: ./src/icons.mjs
/* 
 * This file is part of rootie.
 *
 * rootie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rootie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rootie.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Icons for different file types based on file extension or special names.
 * @type {Object.<string, string>}
 */
const ICONS = {
    directory: '📁',
    hidden_file: '🙈',
    file: '📄',
    '.aac': '🎵',
    '.ai': '🖌️',
    '.apk': '📱',
    '.app': '🍏',
    '.avi': '🎥',
    '.bat': '📑',
    '.bmp': '🖼️',
    '.c': '🔧',
    '.cpp': '🔧',
    '.css': '🎨',
    '.csv': '📊',
    '.dat': '📁',
    '.deb': '📦',
    '.dmg': '💽',
    '.doc': '📄',
    '.docx': '📄',
    '.eps': '🖼️',
    '.exe': '💻',
    '.flac': '🎵',
    '.flv': '🎥',
    '.gif': '🖼️',
    '.gz': '📦',
    '.h': '🔧',
    '.html': '🌐',
    '.ics': '📅',
    '.iso': '💽',
    '.java': '☕',
    '.jpeg': '🖼️',
    '.jpg': '🖼️',
    '.js': '📜',
    '.json': '🔧',
    '.log': '📜',
    '.m4a': '🎵',
    '.m4v': '🎥',
    '.markdown': '📝',
    '.md': '📝',
    '.mov': '🎥',
    '.mp3': '🎵',
    '.mp4': '🎥',
    '.mpeg': '🎥',
    '.mpg': '🎥',
    '.odt': '📄',
    '.ogg': '🎵',
    '.otf': '🔤',
    '.pdf': '📑',
    '.php': '💻',
    '.png': '🖼️',
    '.ppt': '📊',
    '.pptx': '📊',
    '.psd': '🖌️',
    '.py': '🐍',
    '.rar': '📦',
    '.rb': '💎',
    '.rtf': '📄',
    '.sh': '💻',
    '.svg': '🖼️',
    '.tar': '📦',
    '.tif': '🖼️',
    '.tiff': '🖼️',
    '.ttf': '🔤',
    '.txt': '📄',
    '.wav': '🎵',
    '.webm': '🎥',
    '.webp': '🖼️',
    '.woff': '🔤',
    '.woff2': '🔤',
    '.xls': '📊',
    '.xlsx': '📊',
    '.xml': '🔧',
    '.yml': '🔧',
    '.zip': '📦',
    '.7z': '📦',
    README: '📋',
    CHANGELOG: '🔄',
    LICENSE: '📜',
    'CMakeLists.txt': '🔨',
    '.gitignore': '🚫',
    'package.json': '📦',
    'package-lock.json': '📦',
    'yarn.lock': '📦',
};

;// CONCATENATED MODULE: ./src/specialfiles.mjs
/* 
 * This file is part of rootie.
 *
 * rootie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rootie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rootie.  If not, see <http://www.gnu.org/licenses/>.
 */

// Coloring for special files like README, CHANGELOG and others
const specialFiles = [
    'README',
    'README.md',
    'readme',
    'readme.md',
    'CHANGELOG',
    'CHANGELOG.md',
    'changelog',
    'changelog.md',
    'LICENSE',
    'LICENSE.md',
    'license',
    'license.md',
    'CMakeLists.txt',
    ".bashrc",
    ".bash_profile",
    ".profile",
    ".zshrc",
    ".zprofile",
    ".zlogin",
    ".zlogout",
    ".zshenv",
    ".cshrc",
    ".tcshrc",
    ".kshrc",
    ".login",
    ".logout",
    ".inputrc",
    ".vimrc",
    ".gvimrc",
    ".emacs",
    ".nanorc",
    ".screenrc",
    ".tmux.conf",
    ".gitconfig",
    ".gitignore",
    ".gitattributes",
    ".hgignore",
    ".hgrc",
    ".npmrc",
    ".yarnrc",
    ".eslintrc",
    ".eslintrc.json",
    ".eslintrc.yaml",
    ".eslintrc.yml",
    ".eslintrc.js",
    ".prettierrc",
    ".prettierrc.json",
    ".prettierrc.yaml",
    ".prettierrc.yml",
    ".prettierrc.js",
    ".prettierignore",
    ".stylelintrc",
    ".stylelintrc.json",
    ".stylelintrc.yaml",
    ".stylelintrc.yml",
    ".stylelintrc.js",
    ".stylelintignore",
    ".eslintignore",
    ".babelrc",
    ".babelrc.json",
    ".babelrc.js",
    ".babelignore",
    ".dockerignore",
    ".gcloudignore",
    ".terraformrc",
    ".terragrunt.hcl",
    ".ansible.cfg",
    ".pylintrc",
    ".flake8",
    ".mypy.ini",
    ".pep8",
    ".editorconfig",
    ".aws/config",
    ".aws/credentials",
    ".vscode/settings.json",
    ".vscode/extensions.json",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "jsconfig.json",
    "composer.json",
    "webpack.config.js",
    "rollup.config.js",
    "gruntfile.js",
    "gulpfile.js",
    "jest.config.js",
    "karma.conf.js",
    "protractor.conf.js",
    "postcss.config.js",
    "tailwind.config.js",
    "babel.config.js",
    "nuxt.config.js",
    "next.config.js",
    "gatsby-config.js",
    "vue.config.js",
    "angular.json",
    "svelte.config.js",
    "capacitor.config.json",
    "ionic.config.json",
    "snowpack.config.js",
    "metro.config.js",
    ".env",
    ".env.local",
    ".env.development",
    ".env.test",
    ".env.production"
]
;// CONCATENATED MODULE: ./src/index.mjs
/* 
 * This file is part of rootie.
 *
 * rootie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rootie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rootie.  If not, see <http://www.gnu.org/licenses/>.
 */









// Define colors for different file types
const colors = {
    directory: C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.blue,
    hidden_file: C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.grey,
    special_file: C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.yellow.bold,
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
        const items = external_fs_namespaceObject.readdirSync(rootDir).sort();

        items.forEach((item, i) => {
            const itemPath = external_path_namespaceObject.join(rootDir, item);
            const isLast = i === items.length - 1;
            let icon = getIcon('file');
            let colorize = (text) => text; // Default function for no coloring

            if (external_fs_namespaceObject.statSync(itemPath).isDirectory()) {
                icon = getIcon('directory');
                colorize = colors.directory;
            } else if (item.startsWith('.')) {
                icon = getIcon('hidden_file');
                colorize = colors.hidden_file;
            } else {
                const ext = external_path_namespaceObject.extname(item).toLowerCase();
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

            if (external_fs_namespaceObject.statSync(itemPath).isDirectory()) {
                const newPrefix = prefix + (isLast ? '    ' : '│   ');
                output += printDirectoryTree(itemPath, newPrefix, colored);
            }
        });
    } catch (error) {
        console.error(C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.red(`Error: ${error.message}`));
    }
    return output;
};

/**
 * Main function that handles user interaction via Inquirer.
 */
const main = async () => {
    try {
        const { directory } = await C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundinquirer.prompt([
            {
                type: 'input',
                name: 'directory',
                message: 'Enter the directory to list',
                default: '.',
            },
        ]);

        if (!external_fs_namespaceObject.existsSync(directory) || !external_fs_namespaceObject.statSync(directory).isDirectory()) {
            throw new Error(`Invalid directory: '${directory}' is not a directory`);
        }

        console.log(`\n🌳 Directory structure of '${directory}':\n`);
        const directoryStructure = printDirectoryTree(directory, '', true);
        console.log(directoryStructure);

        const { action } = await C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundinquirer.prompt([
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
            C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundclipboardy.writeSync(printDirectoryTree(directory));
            console.log(C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.green('✔️ Text copied to clipboard!'));
        } else if (action === 'export') {
            const filePath = external_path_namespaceObject.join(directory, 'directory_structure.txt');
            external_fs_namespaceObject.writeFileSync(filePath, printDirectoryTree(directory));
            console.log(C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.green(`✔️ Directory structure exported to ${filePath}`));
        } else {
            console.log(C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.yellow('No action selected.'));
        }
    } catch (err) {
        console.error(C_Users_matte_AppData_Roaming_npm_node_modules_vercel_ncc_dist_ncc_notfoundchalk.red(`Error during user interaction: ${err.message}`));
    }
};

// Start executing the main function
main();

})();

