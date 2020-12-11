const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

/**
 * Write a function called withBoxUnlocked that 
 * takes a function value as argument, 
 * unlocks the box, 
 * runs the function, 
 * and then ensures that the box is locked again before returning, 
 * regardless of whether the argument function returned normally or threw an exception.
 * 
 * For extra points, make sure that 
 * if you call withBoxUnlocked when the box is already unlocked, 
 * the box stays unlocked.
 * @param {Function} body 
 */
function withBoxUnlocked(body) {
  // Your code here. 
  let boxWasUnlocked = !box.locked;  
  try {   
    if (!boxWasUnlocked) box.unlock(); 
    body();
  } catch (e) {
    console.log("Error raised: " + e);
  } finally {
    if (!boxWasUnlocked) {
      box.lock()
    }
  };
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

withBoxUnlocked(function () {
  throw new Error("Pirates on the horizon! Abort!");
});

console.log(
  "content:", box._content,
  "\nbox locked?:", box.locked
);