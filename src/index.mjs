import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import clipboardy from 'clipboardy';
import chalk from 'chalk';
import { ICONS } from './icons.mjs';
import { specialFiles } from './specialfiles.mjs';

// Definizione dei colori per i vari tipi di file
const colors = {
    directory: chalk.blue,
    hidden_file: chalk.grey,
    special_file: chalk.yellow.bold,
};

/**
 * Ottiene l'icona corrispondente per il tipo di file.
 * @param {string} fileType - Tipo di file o estensione del file.
 * @returns {string} Icona corrispondente.
 */
const getIcon = (fileType) => ICONS[fileType] || ICONS.file;

/**
 * Stampa la struttura della directory ricorsivamente con icone e colori.
 * @param {string} rootDir - Directory radice da esplorare.
 * @param {string} [prefix=''] - Prefisso da aggiungere a ogni riga di output.
 * @param {boolean} [colored=false] - Se true, applica colori al testo.
 * @returns {string} Output della struttura della directory.
 */
const printDirectoryTree = (rootDir, prefix = '', colored = false) => {
    let output = '';
    try {
        const items = fs.readdirSync(rootDir).sort();

        items.forEach((item, i) => {
            const itemPath = path.join(rootDir, item);
            const isLast = i === items.length - 1;
            let icon = getIcon('file');
            let colorize = (text) => text; // Funzione di default per non colorare

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
        console.error(chalk.red(`Errore: ${error.message}`));
    }
    return output;
};

/**
 * Funzione principale che gestisce l'interazione con l'utente tramite Inquirer.
 */
const main = async () => {
    try {
        const { directory } = await inquirer.prompt([
            {
                type: 'input',
                name: 'directory',
                message: 'Inserisci la directory da elencare',
                default: '.',
            },
        ]);

        if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
            throw new Error(`Directory non valida: '${directory}' non è una directory`);
        }

        console.log(`\n🌳 Struttura della directory '${directory}':\n`);
        const directoryStructure = printDirectoryTree(directory, '', true);
        console.log(directoryStructure);

        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Scegli un\'azione:',
                choices: [
                    { name: 'Copia il testo del risultato', value: 'copy' },
                    { name: 'Esporta in un file TXT', value: 'export' },
                    { name: 'Nessuna azione', value: 'none' }
                ],
            },
        ]);

        if (action === 'copy') {
            clipboardy.writeSync(printDirectoryTree(directory));
            console.log(chalk.green('✔️ Testo copiato negli appunti!'));
        } else if (action === 'export') {
            const filePath = path.join(directory, 'directory_structure.txt');
            fs.writeFileSync(filePath, printDirectoryTree(directory));
            console.log(chalk.green('✔️ Struttura della directory esportata in ${filePath}'));
        } else {
            console.log(chalk.yellow('Nessuna azione selezionata.'));
        }
    } catch (err) {
        console.error(chalk.red('Errore durante l\'interazione con l\'utente: ${err.message}'));
    }
};

// Avvia l'esecuzione della funzione principale
main();
