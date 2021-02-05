const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');

// Using chalk
// console.log(chalk.red('Hello world'));

// Customize yargs version
yargs.version('1.1.0');

// Create yargs command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string,
        },
        number: {
            describe: 'Number of note',
            demandOption: true,
            type: 'integer',
        }
    },
    handler: function () {
        console.log(chalk.blue('Adding a new note!'));
        
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true, // require demand
            type: 'string',
        }
    },
    handler: function () {
        console.log(chalk.red('Removing a existing note...'));
        
    }
})

// console.log(process.argv);

// const command = process.argv[2];
console.log(yargs.argv);
