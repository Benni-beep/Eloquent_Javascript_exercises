class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}
/**
 * @param {Number} a 
 * @param {Number} b 
 * loop continues until
 * a. primitiveMultiply returns a number
 * b. primitiveMultiply throws an error that is NOT a MultiplicatorUnitFailure
 */
function reliableMultiply(a, b) {
    for (; ;) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) {
                throw error;
            }
        }
    }
}
console.log(reliableMultiply(8, 8));
// → 64