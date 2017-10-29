'use strict'

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign')

// React depends on requestAnimationFrame
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}

// UnhandledPromiseRejectionWarning: Unhandled promise rejection
// (rejection id: 6): Error: Network Error
// In Node v7 unhandled promise rejections will terminate the process
if (!process.env.LISTENING_TO_UNHANDLED_REJECTION) {
  process.on('unhandledRejection', () => {})
  // Avoid memory leak by adding too many listeners
  process.env.LISTENING_TO_UNHANDLED_REJECTION = true
}

const { URLSearchParams } = require('url')
global.URLSearchParams = URLSearchParams
