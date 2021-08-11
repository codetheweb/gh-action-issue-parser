import * as core from '@actions/core'
import issueParser from 'issue-parser'

const parse = issueParser('github')

async function run(): Promise<void> {
  try {
    const issueBody: string = core.getInput('body')

    const output = parse(issueBody)

    core.info(`Parsed issue body: ${JSON.stringify(output)}`)

    core.setOutput('parsed', output)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
