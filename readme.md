# 23 Design Patterns with TypeScript

## Setup Build Tooling

``npm install -g typescript``

``npm install -g nodemon``

## Development

Create new folder

``tsc --init``

Add to tsconfig.json

```
"outDir": "./dist", 
"rootDir": "./",
```

Run the code editor build task (cmd + shift + b on mac vscode)

``nodemon dist/main.js``

## Run a pattern

``node folder/dist/main.js``