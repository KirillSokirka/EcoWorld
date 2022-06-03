const area = document.querySelector(".annoumcments-area"),
button = area.querySelector(".show-more-btn");

let announcements = [
    Object.create({}, { name : {value: 'first'}}), 
    Object.create({}, { name : {value: 'second'}}), 
    Object.create({}, { name : {value: 'third'}}),
    Object.create({}, { name : {value: 'fourth'}}),
    Object.create({}, { name : {value: 'fifth'}})
]

function configureAnnouncementsOnScreen(size) {
    let rows = [];
    let count = 0, rowCount = 0;

    announcements.forEach(item => {                

        if (count == 0) {
            rows[rowCount] = ["<div class='annoumcment-row'>"];                
        } else if ((count % size) == 0) {    
            rows[rowCount] += "</div>";
            rows[++rowCount] = "<div class='annoumcment-row'>";
        }

        rows[rowCount] += `<div class='annoumcment-block'>${item.name}</div>`;        
        count++;

        if (count == announcements.length) {
            rows[rowCount] += "</div>";
        }
    });

    return rows
}

function placeAnnouncements() {
    let rows = []
    
    if (window.innerWidth <= 530) {
        rows = configureAnnouncementsOnScreen(2);
    } else if (window.innerWidth > 530 && window.innerWidth <= 700){
        rows = configureAnnouncementsOnScreen(3);
    }
    else {
        rows = configureAnnouncementsOnScreen(4);
    }

    var elements = area.querySelectorAll(".annoumcment-row")
    elements.forEach(element => element.remove())

    rows.reverse().forEach(row => {
        area.insertAdjacentHTML('afterbegin', row);
    })

    rows = [];

    var nonDisplayedRows = selectNonDisplayedRows();
    if (nonDisplayedRows.length != 0) {
        button.style.display = 'flex';
    }
}

window.addEventListener('resize', placeAnnouncements);

placeAnnouncements();

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