const test = require('tape')
const isAsyncGenerator = require('./index.js')

test('async generator', t => {
  async function * asyncFn () {}

  t.equal(isAsyncGenerator(asyncFn), true)
  t.end()
})

test('anonymous async generator', t => {
  t.equal(isAsyncGenerator(async function * () {}), true)
  t.end()
})

test('generator', t => {
  function * asyncFn () {}

  t.equal(isAsyncGenerator(asyncFn), false)
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
