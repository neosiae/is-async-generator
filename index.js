module.exports = isAsyncFunction

const AsyncGenerator = async function * () {}.constructor

function isAsyncFunction (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function, but got: ${typeof fn}`)
  }

  return fn instanceof AsyncGenerator
}
