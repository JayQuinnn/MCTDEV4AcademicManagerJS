function swap(array, i,j){
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
    return array
}
function Sorts(){
    this.modus = "";
    this.setModus = modus =>{
        this.modus = modus;
    }
    this.doSort = unsorted =>{
        return this.modus.bubbleSort(unsorted)
    }
}
function BubbleSortAscending(){
    this.bubbleSort = (a) =>{
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < a.length - 1; i++) {
                if (a[i]['fldName'] > a[i + 1]['fldName']) {
                    let temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return a;
    }
}
function BubbleSortDescending(){
    this.bubbleSort = (a) =>{
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < a.length - 1; i++) {
                if (a[i]['fldName'] < a[i + 1]['fldName']) {
                    let temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return a;
    }
}
const bubbleSortDescending = new BubbleSortDescending()
const bubbleSortAscending = new BubbleSortAscending()
const sorts = new Sorts()

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