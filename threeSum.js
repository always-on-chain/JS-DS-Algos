var threeSum = function(nums, target) {
    nums = nums.sort((a, b) => {return a - b});
    var first = 0;
    var second = 1;
    var third = nums.length - 1;
    
    for (var i = 0; i < nums.length; i++) {
        var a = nums[first];
        var b = nums[second];
        var c = nums[third];
        
        if (a + b + c === target) {
            return [a, b, c];
        } else {
            if (a + b + c > target) {
              third = third - 1;
            } else {
              second = second + 1;
            }
        }
    }
    
    return 'no solution'
};

threeSum([1,2,3,4,8,12], 13);

var isEqual = function(actual, expected) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`Failed, actual: ${actual} vs. expected: ${expected}`)
  }
}

var actual1 = threeSum([1,2,3,4,8,12], 13);
var expected1 = [1,4,8];
var actual2 = threeSum([2,6,7,8,15], 17);
var expected2 = [2,7,8];
var actual3 = threeSum([3,4,7,12,14,17], 21);
var expected3 = [3,4,14];

isEqual(actual1, expected1);
isEqual(actual2, expected2);
isEqual(actual3, expected3);

