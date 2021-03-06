import { Command } from '@oclif/command'
import chalk from 'chalk'
import emoji from 'node-emoji'

export const printCliName = () => {
  return chalk.blue.bold(`${emoji.get('rocket')} Kourou`)
}

export abstract class Kommand extends Command {
  public log(message?: string | undefined, ...args: any[]): void {
    return super.log(` ${message}`, ...args)
  }

  public logError(message?: string | undefined, ...args: any[]): void {
    return this.log(chalk.red(message), ...args)
  }
}
