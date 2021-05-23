function swap(array, i,j){
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
    return array
}
function bubbleSort(unsorted) {
    let isSorted = false;
    let lastUnsorted = unsorted.length -1;
    while(!isSorted){
        for (let i = 0; i < lastUnsorted; i++) {
            console.log(unsorted[i], unsorted[i+1]);
            if (unsorted[i].fldName > unsorted[i+1].fldName) {
                swap(unsorted, i, i+1)
                isSorted = false;
            }
        }
        lastUnsorted--;
    }
    return unsorted;
}

function printPDF(pdfBody, fldName, fldLastName){
    console.log(pdfBody)
    let options = { format: 'Letter' };
    pdf.create(pdfBody, options).toFile(`/pdfexports/${fldName}${fldLastName}.pdf`, function(err, res) {
        if(err) return console.log(error);
        console.log(res);
    })
}

function ExpirementbubbleSort(a, fCompare) {
    if( a.length < 2)
        return a;
    for( var length = a.length-1; length; --length) {
        var noSwaps = true;
        var temp;
        for( i=0; i<length; ++i) {
            if( fCompare( a[i], a[i+1]) > 0) {
                temp = a[i+1];
                a[i+1] = a[i];
                a[i] = temp;
                noSwaps = false;
            }
        }
        if( noSwaps)
            break;
    }
}

function sortByColumn(a, colIndex){
    function sortFunctionq(a, b) {
        if (a[colIndex] === b[colIndex]) {
            return 0;
        }
        else {
            return (a[colIndex] > b[colIndex]) ? -1 : 1;
        }
    }
    return ExpirementbubbleSort(a, sortFunctionq);
}