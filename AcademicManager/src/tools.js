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
            if (unsorted[i] > unsorted[i+1]) {
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