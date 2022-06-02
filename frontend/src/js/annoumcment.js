const area = document.querySelector(".annoumcments-area"),
button = area.querySelector(".show-more-btn");


function selectNonDisplayedRows() {
    let rows = area.querySelectorAll('.annoumcment-row');
    let nonDisplayedRows = [];
    rows.forEach(row => {
        var style = window.getComputedStyle(row);
        if (style.display === 'none') {
            nonDisplayedRows.push(row);
        }
    });
    return nonDisplayedRows;
}

button.addEventListener('click', () => { 
    var nonDisplayedRows = selectNonDisplayedRows();

    if (nonDisplayedRows.length != 0) {
        var rowToDisplay = nonDisplayedRows[0];
        rowToDisplay.style.display = 'flex';
        nonDisplayedRows.shift();
    } 
    
    if (nonDisplayedRows.length == 0) {
        button.style.display = 'none';
    }
});