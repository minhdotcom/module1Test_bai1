function findMinScore (array) {
    if (array == null) {
        return "mang nhap vao la null"
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
}
console.log(findMinScore([10,5,2,8,-1,6,8]));
console.log(findMinScore([2,4,0,5,1]));
console.log(findMinScore([8,6,2,6,1,1,4]));
console.log(findMinScore(null));