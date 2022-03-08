/**
DIVIDE THE GIVEN NUMBERS USING BINARY SEARCH
*/

function division(x, y) {
    
    let l = 1, u = x;
    let mid;
    while (l <= u) {
        mid = l + Math.floor((u - l)/2);
        let currentProduct = mid * y;
        if (currentProduct === x) {
            return mid;
        }
        if (currentProduct > x) {
            u = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return mid;
}