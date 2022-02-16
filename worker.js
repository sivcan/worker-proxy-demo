function add (a, b) {
  return a + b;
}

function multiply (a, b) {
  return a * b;
}

function exposeWorkerMethods (methods) {
  // Worker has the API called `postMessage` to send a message.

  // @TODO: Implement the expose features
}

exposeWorkerMethods({
  add,
  multiply
})