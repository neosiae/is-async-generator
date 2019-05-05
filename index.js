module.exports = isAsyncFunction

const AsyncGenerator = async function * () {}.constructor

function isAsyncFunction (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('The function provided is not a function.')
  }

  return fn instanceof AsyncGenerator
}
