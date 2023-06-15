#!/usr/bin/node

// Returns the reverse of a list
exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
};
