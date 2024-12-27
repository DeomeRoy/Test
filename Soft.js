function mergeSort(arr) {
    // 基本情況：如果陣列長度小於或等於1，直接返回該陣列
    if (arr.length <= 1) {
        return arr;
    }

    // 找到陣列中間的索引
    const mid = Math.floor(arr.length / 2);

    // 遞迴地將左側和右側的子陣列進行合併排序
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // 合併並返回已排序的陣列
    return merge(left, right);
}

function merge(left, right) {
    const result = []; // 儲存合併後的結果陣列
    let i = 0; // 左側陣列的索引
    let j = 0; // 右側陣列的索引

    // 合併兩個已排序的陣列
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]); // 將較小的元素放入結果陣列
            i++; // 移動左側陣列的索引
        } else {
            result.push(right[j]); // 將較小的元素放入結果陣列
            j++; // 移動右側陣列的索引
        }
    }

    // 將剩下的元素添加到結果陣列
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result; // 返回合併後的結果
}

// 測試合併排序函數
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // 輸出: [3, 9, 10, 27, 38, 43, 82]