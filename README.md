# Typescript library template

Template repository to scaffold typescript libraries.

## Setup

1. Inside your `package.json` file, update:
    - The name of your library in the `name` field.
    - The `repository` field with the URI of the git repository.

2. Enable the new repo in Google Cloud Build, otherwise, it'll complain the repo is not connected
with a failed build.

3. After updating those fields, run `npx install-peerdeps -D @inkatze/eslint-config`. This
should create a `package-lock.json` file and allow you to run `npm run test`.

Happy hacking!
