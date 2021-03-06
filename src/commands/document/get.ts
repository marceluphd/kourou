import { flags } from '@oclif/command'
import { Kommand, printCliName } from '../../common'
import { kuzzleFlags, KuzzleSDK } from '../../support/kuzzle'

export default class DocumentGet extends Kommand {
  static description = 'Get a document'

  static flags = {
    help: flags.help(),
    ...kuzzleFlags
  }

  static args = [
    { name: 'index', description: 'Index name', required: true },
    { name: 'collection', description: 'Collection name', required: true },
    { name: 'id', description: 'Document ID', required: true }
  ]

  async run() {
    this.log('')
    this.log(`${printCliName()} - ${DocumentGet.description}`)
    this.log('')

    const { args, flags: userFlags } = this.parse(DocumentGet)

    const sdk = new KuzzleSDK(userFlags)
    await sdk.init()

    try {
      const document = await sdk.document.get(
        args.index,
        args.collection,
        args.id)

      this.log(JSON.stringify(document, null, 2))
    } catch (error) {
      this.log(error.message)
    }
  }
}
