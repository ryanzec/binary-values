#! /usr/bin/env node

require('colors');

var x;
var decimalValue = process.argv[2];
var activeBinaryFlags = [];

binaryValues = [1];

for(x = 1; x < 64; x += 1) {
  binaryValues.push(binaryValues[x - 1] * 2);
}

binaryValues.forEach(function(binaryValue) {
  if((decimalValue & binaryValue) == binaryValue) {
    activeBinaryFlags.push(binaryValue);
  }
});

if(activeBinaryFlags.length > 0) {
  console.log('The number ' + (decimalValue).green + ' has the following binary flags set:');

  activeBinaryFlags.forEach(function(value) {
    console.log(value.toString().green);
  });
} else {
  console.log('The number ' + decimalValue + ' has no binary flags set.');
}