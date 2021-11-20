// Question - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Input: nums = [3,2,4], target = 6 Output: [1,2]
// Input: nums = [2,7,11,15], target = 9 Output: [0,1]
// Input: nums = [3,3], target = 6 Output: [0,1]

// Runtime 101 ms, Memory 40.8 MB

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const res = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        while (map.has(num2)) {
            res.push(i, map.get(num2));
            return res;
        }
        map.set(num1, i)
    }
};