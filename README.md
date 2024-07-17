# Rootie

Rootie è un'applicazione per la gestione e la visualizzazione della struttura delle directory, progettata per offrire una rappresentazione visiva chiara e dettagliata della gerarchia dei file nel tuo sistema.

Esempio:

```plaintext
├── 📄 directory_structure.txt
├── 📁 dist-windows
│   └── 💻 index.exe
├── 📁 node_modules
│   ├── ...
├── 📄 package-lock.json
├── 📄 package.json
├── 📁 src
│   ├── 📁 assets
│   │   ├── 📁 icon-ico
│   │   │   ├── 📄 rootie-icon128.ico
│   │   │   ├── 📄 rootie-icon16.ico
│   │   │   ├── 📄 rootie-icon256.ico
│   │   │   ├── 📄 rootie-icon32.ico
│   │   │   ├── 📄 rootie-icon48.ico
│   │   │   └── 📄 rootie-icon72.ico
│   │   ├── 📁 icon-png
│   │   │   ├── 🖼️ rootie-icon1024.png
│   │   │   ├── 🖼️ rootie-icon128.png
│   │   │   ├── 🖼️ rootie-icon16.png
│   │   │   ├── 🖼️ rootie-icon256.png
│   │   │   ├── 🖼️ rootie-icon32.png
│   │   │   ├── 🖼️ rootie-icon48.png
│   │   │   ├── 🖼️ rootie-icon512.png
│   │   │   └── 🖼️ rootie-icon64.png
│   │   └── 📁 icon-svg
│   │       ├── 🖼️ rootie-icon1024.svg
│   │       ├── 🖼️ rootie-icon128.svg
│   │       ├── 🖼️ rootie-icon16.svg
│   │       ├── 🖼️ rootie-icon256.svg
│   │       ├── 🖼️ rootie-icon32.svg
│   │       ├── 🖼️ rootie-icon48.svg
│   │       ├── 🖼️ rootie-icon512.svg
│   │       └── 🖼️ rootie-icon64.svg
│   ├── 📄 icons.mjs
│   ├── 📄 index.mjs
│   └── 📄 specialfiles.mjs
└── 🌐 test.html

```

## Caratteristiche

- **Visualizzazione Gerarchica**: Mostra la struttura delle directory utilizzando simboli grafici per una visualizzazione intuitiva.
- **Colorazione Personalizzata**: Colori differenti per identificare facilmente tipi diversi di file e cartelle.
- **Supporto per Più Piattaforme**: Funziona su Windows, macOS e Linux.
- **Facile Navigazione**: Naviga attraverso le directory principali e i file speciali con facilità.

## Installazione

Per installare Rootie, segui questi passaggi:

1. Clona il repository o scarica il codice sorgente.

   ```bash
   git clone https://github.com/tuonome/rootie.git
   cd rootie
   ```
2. Installa le dipendenze utilizzando npm (Node.js Package Manager).

   ```bash
   npm install
   ```

## Utilizzo

Dopo aver installato le dipendenze, puoi eseguire Rootie direttamente da riga di comando.

```bash
npm start
```

Questo comando avvierà l'applicazione e visualizzerà la struttura delle directory sul tuo terminale.

## Comandi Disponibili

- `npm start`: Avvia l'applicazione Rootie.
- `npm run build-windows`: Compila l'applicazione per Windows.
- `npm run build-linux`: Compila l'applicazione per Linux.
- `npm run build-macos`: Compila l'applicazione per macOS.

## Contributi

Le segnalazioni di bug e le richieste di funzionalità sono benvenute. Per favore, apri un problema nel repository se hai delle domande o dei suggerimenti.

## Licenza

Questo progetto è sotto licenza ISC. Per maggiori informazioni, consulta il file `LICENSE`.
