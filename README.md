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

**TypeScript Types Vs JavaScript Types**

JS - Dynamically type
Can initialize variable in one type and re-assign it to another
Datatype is resolved at runtime
TS - Static type
Variables cannot be re-assigned into a different datatype
Datatype is _set during development_
Core primitive types are all **lowercase**

|            | JavaScript                           | TypeScript                                      |          TypeScript Core Differences           |
| :--------: | :----------------------------------- | :---------------------------------------------- | :--------------------------------------------: |
| Variables  | `Dynamic can be changed at any time` | `Static cannot be re-assigned once initialized` |                                                |
|  Datatype  | `Resolved at runtime`                | `Set during development`                        |                                                |
| Core types | `Boolean`                            | `boolean`                                       |    `Only true/false no 'truthy or falsey'`     |
|            | `Null`                               | `null`                                          |
|            | `Undefined`                          | `undefined`                                     |
|            | `Number`                             | `number`                                        |      `All numbers, no floats or integers`      |
|            | `BigInt`                             |                                                 |
|            | `String`                             | `string`                                        |               `All text values`                |
|            | `Symbol`                             | `symbol`                                        |
|            |                                      | `array`                                         | `Any JS array, type can be flexible or strict` |
|            |                                      | `tuple`                                         |
|            |                                      | `enum`                                          |
|            |                                      | `unknown`                                       |
|            |                                      | `any`                                           |
|            |                                      | `never`                                         |
|            |                                      | `object`                                        |    `Any JS object, specific types possible`    |

## Required Materials

### NodeJS

### TypeScript

### Lite-Server (Optional for Dev)
