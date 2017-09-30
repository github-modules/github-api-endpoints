# github-api-endpoints 

> A list of all the paths supported by the GitHub v3 API

This module is compiled by scraping 
[developer.github.com/v3](https://developer.github.com/v3/)
and  collecting all the `<code>` snippets that start with HTTP verbs.

## Installation

```sh
npm install github-api-endpoints --save
```

## Usage

You can use it programatically:

```js
const endpoints = require('github-api-enpoints')

endpoints.length
// 485

endpoints.filter(e => e.includes('GET /gists'))
// [ 
//  'GET /gists',
//  'GET /gists/:gist_id/comments',
//  'GET /gists/:gist_id/comments/:id',
//  'GET /gists/:id',
//  'GET /gists/:id/:sha',
//  'GET /gists/:id/commits',
//  'GET /gists/:id/forks',
//  'GET /gists/:id/star',
//  'GET /gists/public',
//  'GET /gists/starred'
// ]
```

Or you can install it globally and use it on the command line:

```sh

npm i -g github-api-endpoints

github-api-endpoints | grep branches | grep DELETE
# DELETE /repos/:owner/:repo/branches/:branch/protection
# DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins
# DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
# DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks
# DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
# DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions
# DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
# DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users
```

## Endpoints

See [endpoints.json](endpoints.json)

## Paths

You can also get a list of URL paths:

```js
const paths = require('github-api-endpoints/paths.json')
```

For the raw list of paths, see [paths.json](paths.json)

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [got](): Simplified HTTP requests
- [http-verbs](https://github.com/pigulla/http-verbs): Export http verbs as constants.
- [lodash](): Lodash modular utilities.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT
