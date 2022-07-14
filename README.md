# TypeScript-Review

Self-study TypeScript(TS) from the Beginning

## Definitions

### What

JavaScript(JS) based programming language which adds new features to basic JavaScript but needs to be compiled for browser to run. Main benefit is adding TYPE to code which helps eliminate runtime errors by pointing out compile errors based on variable expectations vs actual variables. TypeScript eliminates the need for additional logic required to verify the correct data type is being used.

### How

#### Basics

Within Basics Folder, simple HTML and JS files showcase a common error on run: when user inputs values then selects button, their console will display a concatenation of the two inputs rather than a sum of the inputs. To fix within vanilla JavaScript if/else logic would be needed.

TypeScript helps simplify and ensure that logic is followed as expected. To begin, a new TypeScript file is created and starting JS code is coped into the TS file. Immediately errors will occur to state that values are not identified. At this point, we will delete our starter JS file to ensure multiple JS files with the same code are not presented once TS code is compiled.

To compile TS code into JS, open terminal & run `tsc [yourTSfile].ts` which results in a compiling error because all variables are not data type set. _Note: Make sure that you are within the folder that contains TS file._ Update index.html to include new file created by command.

## Required Materials

### NodeJS

### TypeScript

### Lite-Server (Optional for Dev)
