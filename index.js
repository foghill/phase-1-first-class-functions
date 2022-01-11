function receivesAFunction(liftWeights) {
    liftWeights()
}

function liftWeights() {
    console.log("Pump iron");
  }
  
function returnsANamedFunction() {
      return liftWeights
  }

function returnsAnAnonymousFunction() {
    return function() {
        console.log('this function is anonymous')
    }
}