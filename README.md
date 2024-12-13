# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numerical field, but attempting to use it with a string field will lead to an error.

## Bug

The bug is caused by attempting to increment a string field using the `$inc` operator. The correct approach involves ensuring the field is a number before performing the increment operation.  The provided `bug.js` file showcases the incorrect usage.

## Solution

The solution involves verifying the field's data type and converting it to a number if necessary before using `$inc`. The corrected approach is demonstrated in the `bugSolution.js` file.

## How to Reproduce

1.  Clone this repository.
2.  Run `bug.js` to observe the error.
3.  Run `bugSolution.js` to see the corrected implementation.
