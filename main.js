function compareEl(a, b) {
    const typeA = typeof a;
    const typeB = typeof b;

    if (typeA === typeB) {
        return a - b;
    } else {
        return typeA > typeB ? 1 : -1;
    }
}
function processArrFromUser() {
    let arrLength = Number(prompt('Enter array length'));

    if (!isNaN(arrLength)) {
        console.log('ArrLength: ' + arrLength)
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrEL = prompt('Enter array element');

            let arrElToNum = Number(arrEL);
            if (!isNaN(arrElToNum)) {
                arr.push(arrElToNum);
            } else {
                arr.push(arrEL);
            }

            // arr.push(arrEL);
            console.log(arr);
        }

        arr.sort(compareEl);
        console.log('Sorted: ' + arr.join(', '));

        arr.splice(2, 3);
        console.log('Spliced: ' + arr.join(', '));
    } else {
        console.log('Please enter array length as a natural number')
    }
}
processArrFromUser();
