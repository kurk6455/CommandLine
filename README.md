````md
# Word Count CLI
**Word Count CLI** — a simple command-line tool to count the number of words in a text file, built with `commander` and `chalk` using ES modules.

---
## Description
This small Node.js CLI reads a file and prints the number of words it contains. It's a minimal example of building a CLI with argument parsing (`commander`) and colored output (`chalk`). The project uses ES module syntax (`.mjs`).

---
## Files
- `index.mjs` — main CLI script (ES module)
- `package.json` / `package-lock.json` — dependency and metadata files
- `.gitignore` — should include `node_modules/`

---
## Prerequisites
- Node.js (recommended >= 16)
- npm

---
## Quick start (local)
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the CLI:
   ```bash
   node index.mjs count path/to/file.txt
   ```

Example:
```bash
node index.mjs count sample.txt
# Output (example): You have 42 words in this file.
```

---
## Make it globally runnable (optional)

If you want to run the tool as a global command:
1. Add a shebang as the first line of `index.mjs`:
   ```js
   #!/usr/bin/env node
   ```
2. Add a `bin` entry to `package.json` (example):
   ```json
   {
     "name": "word-count-cli",
     "version": "0.0.0",
     "type": "module",
     "bin": {
       "wordcount": "./index.mjs"
     },
     "dependencies": {
       "chalk": "^5.0.0",
       "commander": "^10.0.0"
     }
   }
   ```
3. Link or install globally:
   ```bash
   # for development
   npm link

   # or to install globally
   npm install -g
   ```

Then run:
```bash
wordcount count path/to/file.txt
```

---
## Notes & tips
* Because this project uses `import`/ES modules, ensure either:

  * your files use the `.mjs` extension (this repo uses `index.mjs`), or
  * `package.json` contains `"type": "module"`.
* Do **not** commit `node_modules/`; add it to `.gitignore`.
* The current word-splitting logic is basic (`split(' ')`). For production, consider trimming, normalizing whitespace, and handling punctuation/Unicode properly.

---
## Contributing
Contributions welcome! Suggestions:
* Improve word-splitting (handle punctuation, newlines, Unicode).
* Add tests or CI.
* Add more CLI options (e.g., character count, line count).
````
