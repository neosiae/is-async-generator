# is-async-generator

[![Build Status](https://travis-ci.com/neosiae/is-async-generator.svg?branch=master)](https://travis-ci.com/neosiae/is-async-generator)

Check if given function is asynchronous generator or not.

## Install

> $ npm install is-async-generator

## Usage

```javascript
const isAsyncGenerator = require('is-async-generator')

isAsyncGenerator(async function * () {}) // true

isAsyncGenerator(function * () {}) // false
```