function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // 將大於 key 的元素移動到右邊
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 將 key 插入到正確的位置
        arr[j + 1] = key;
    }
    return arr;
}

// 測試插入排序函數
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // 輸出 [1, 2, 5, 5, 6, 9]