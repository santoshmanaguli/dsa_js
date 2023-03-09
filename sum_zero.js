//checking the sun zero problem

function sumZero(arr) {
    for (const num of arr) {
        for (let j = 1; j < arr.length - 1; j++) {
            if (num + arr[j] === 0) {
                return [num, arr[j]];
            } 
        }
    }
}

const res = sumZero([-5,-4,-3,-2,0,1,2,4,6,8]);
console.log(res);