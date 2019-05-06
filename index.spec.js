const test = require('tape')
const isAsyncGenerator = require('./index.js')

test('async generator', t => {
  async function * asyncGenerator () {}

  t.equal(isAsyncGenerator(asyncGenerator), true)
  t.end()
})

test('anonymous async generator', t => {
  t.equal(isAsyncGenerator(async function * () {}), true)
  t.end()
})

test('generator', t => {
  function * generator () {}

  t.equal(isAsyncGenerator(generator), false)
  t.end()
})

test('anonymous generator', t => {
  t.equal(isAsyncGenerator(function * () {}), false)
  t.end()
})

test('type error', t => {
  t.throws(() => isAsyncGenerator(true))
  t.end()
})
