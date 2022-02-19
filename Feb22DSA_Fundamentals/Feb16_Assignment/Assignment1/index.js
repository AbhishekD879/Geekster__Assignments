/**
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let start=0
    let end =nums.length-1;

    for(let i=0;i<end;i++){
        if(nums[i]===0){
            [nums[i],nums[start]]=[nums[start],nums[i]]
            start++;
        }

        if(nums[i]===2){
            [nums[i],nums[end]]=[nums[end],nums[i]]
            end--
            i--
        }
    }
    console.log(nums)
};
sortColors([2,0,2,1,1,0])