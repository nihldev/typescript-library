# Typescript library template

Template repository to scaffold typescript libraries

## Setup

In order for the library to work, you need to change two fields from `package.json`

1. Update the name of your library in the `name` field.
1. Update the `repository` with the URI of the git repository.

After updating those fields, run `npx install-peerdeps -D @inkatze/eslint-config`. This
should create a `package-lock.json` file and allow you to run `npm run test`.

Happy hacking!
