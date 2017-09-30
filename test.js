require('chai').should()
const {describe, it} = require('mocha')
const endpoints = require('.')
const paths = require('./paths.json')

describe('github-api-endpoints', () => {
  it('sets default export to an array of endpoints', () => {
    endpoints.should.be.an('array')
    endpoints.should.include('DELETE /orgs/:org/members/:username')
    endpoints.should.include('GET /repos/:owner/:repo')
  })

  it('includes obscure HTTP verbs like PATCH', () => {
    endpoints.should.include('PATCH /admin/organizations/:org')
  })

  it('has an array of paths', () => {
    paths.should.be.an('array')
  })
})
