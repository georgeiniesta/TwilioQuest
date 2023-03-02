class Materializer {
    constructor(target) {
      // using constructor class to create object below m for Materializer
      //first validation will check for m.activated, so it will be false
      //second will use function activate and use "this" to set up activated to true
      //also validate if activated is true we will return the target, we will pass Kevin
        this.target = target
        this.activated = false
    }
        activate(){this.activated  = true}
        
        materialize(){
            if (this.activated === true){return this.target}
            
    }
  
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.

  //creating object m from Materializer and we will pass 'Kevin'
  const m = new Materializer('Kevin');
  console.log(m.activated); // would print "false"
  
  m.activate();
  console.log(m.activated); // would print "true"
  
  console.log(m.materialize()); // would print "Kevin"*/