/**
 * @description Extends the capabilities of a worker Instance by providing
 * a Promise based interface and creates a bridge to handle Events <> Promises.
 *
 * @param {Object} workerInstance
 * 
 * @return {Object} workerInstance wrapped in proxy
 */
function connect (workerInstance) {
  // @TODO: Implement the features here

  // worker APIs:
  // - worker.postMessage 
  // - worker.onmessage
  return workerInstance;
}


/**
 * @description Initialize the script and self-execute since IIFE
 * 
 */
(async function init () {
  const worker = connect(new Worker('./worker.js'));

  try {
    const additionResult = await worker.add(1, 2);

    console.log({ additionResult }); // Should log 3

    await worker.subtract(1, 2); // This should throw an error
  }
  catch (error) {
    console.error(error); // Should throw an error that this operation is not supported
  }
})();
