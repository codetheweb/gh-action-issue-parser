# GH Action Issue Parser

Parses the body of an issue / PR with [issue-parser](https://github.com/pvdlg/issue-parser).

## Usage

Example:

```yaml
name: Parse PR Body

on:
  pull_request:
    types: [edited, synchronize, opened, reopened]
  check_run:

jobs:
  parse-pr:
    runs-on: ubuntu-latest
    name: Parse body of PR
    steps:
      - uses: jwalton/gh-find-current-pr@v1
        id: findPr
      - name: Parse body
        id: parsed
        uses: codetheweb/gh-action-issue-parser@v1
        with:
          body: ${{ steps.findPr.outputs.body }}
      - name: Dump parsed object
        run: |
          echo $parsed | jq
        env:
          parsed: ${{ steps.parsed.outputs.parsed }}
```

**Inputs**:

- `body`: body of PR or issue as string

**Outputs**:

- `parsed`: parsed object returned from [issue-parser](https://github.com/pvdlg/issue-parser)
