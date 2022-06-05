const area = document.querySelector(".annoumcments-area"),
    button = area.querySelector(".show-more-btn");

let announcements = [
    {
        title: 'Зробимо дворик більш затишним!!!',
        personCount: 12,
        locationInfo: 'м. Васильків, вул Покровська 29',
        dateInfo: '22.04.2022 15:00'
    },
    {
        title: 'Допоможіть прибрати набережну',
        personCount: 12,
        locationInfo: 'м. Васильків, вул Зарічна',
        dateInfo: '20.05.2022 11:00'
    },
    {
        title: 'Пошук людей для прибирання',
        personCount: 12,
        locationInfo: 'м. Васильків, вул Декабристів 88',
        dateInfo: '19.04.2022 14:30'
    },
    {
        title: 'Допоможіть прибрати набережну',
        personCount: 12,
        locationInfo: 'м. Васильків, вул Покровська 29',
        dateInfo: '19.04.2022 14:30'
    },
    {
        title: 'Пошук людей для прибирання',
        personCount: 12,
        locationInfo: 'м. Васильків, вул Зарічна',
        dateInfo: '22.04.2022 15:00'
    },
    // {
    //     title: 'Пошук людей для прибирання',
    //     personCount: 12,
    //     locationInfo: 'м. Васильків, вул Зарічна',
    //     dateInfo: '22.04.2022 15:00'
    // },
    // {
    //     title: 'Пошук людей для прибирання',
    //     personCount: 12,
    //     locationInfo: 'м. Васильків, вул Зарічна',
    //     dateInfo: '22.04.2022 15:00'
    // },
    // {
    //     title: 'Пошук людей для прибирання',
    //     personCount: 12,
    //     locationInfo: 'м. Васильків, вул Зарічна',
    //     dateInfo: '22.04.2022 15:00'
    // },
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

        rows[rowCount] += ` <div class="annoumcment-block">
                                <div class="image-part">
                                    <img src="../../images/place-image1.png">
                                    <img class="heart-image">
                                    <div class="person-info">
                                        <p>${item.personCount}</p>
                                        <img class="person-image">
                                    </div>
                                </div>
                                <div class="info-part">
                                    <p class="title">${item.title}</p>
                                    <p class="location-info">локація: ${item.locationInfo}</p>
                                    <p class="date-info">дата: ${item.dateInfo}</p>
                                </div>
                            </div>`;
        count++;

        if (count == announcements.length) {
            rows[rowCount] += "</div>";
        }
    });

    return rows
}

function placeAnnouncements() {
    let rows = []

    if (window.innerWidth <= 550) {
        rows = configureAnnouncementsOnScreen(2);
    } else if (window.innerWidth > 550 && window.innerWidth <= 800) {
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