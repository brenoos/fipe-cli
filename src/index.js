const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const emoji = require('node-emoji')
const cli = require('cli-ux')

class FipeCliCommand extends Command {
  async run() {
    const {flags} = this.parse(FipeCliCommand)
    clear()
    this.log(
      chalk.cyan.bold(
        figlet.textSync('     FIPE', { horizontalLayout: 'full' })
      )
    )
    this.log(emoji.emojify(':car:'), chalk.yellow.bold("Bem vindo ao sistema de consulta da Tabela FIPE"), emoji.emojify(':racing_motorcycle:'))
  }
}

FipeCliCommand.description = `Describe the command here
...
Extra documentation goes here
`

FipeCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = FipeCliCommand
