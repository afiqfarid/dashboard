/* ===== SHOW SIDEBAR ===== */

const toggle = document.getElementById('header-toggle');
const aside = document.getElementById('aside-bar');
const header = document.getElementById('header');
const body = document.getElementById('body');

toggle.addEventListener('click', () => {
    // Show sidebar
    aside.classList.toggle('show_sidebar');

    // Change icon
    // toggle.classList.toggle('toggled_icon');
    
    // Add padding to body
    body.classList.toggle('body_pd');

})

/* aside.addEventListener('click', () => {
    aside.classList.add('show_sidebar');

    toggle.classList.add('bx-x');
    
    body.classList.add('body_pd');

}) */

/* const dropTitle = document.querySelector('.dropdown-title');
const dropContent = document.querySelector('.nav_dropdown-content');
const dropChevron = document.querySelector('.nav_dropdown-icon') */

/* dropTitle.addEventListener('click', () => {
    dropTitle.classList.toggle('drop_title-toggle');
    dropChevron.classList.toggle('show_dropdown-icon')
}); */


/* var i

for(i = 0; i < dropTitle.length; i++) {
    dropTitle[i].addEventListener('click', () => {

        const collapseMenu = this.nextElementSibling;
        
        dropTitle.classList.toggle('drop_title-toggle');


    })
} */


/* ===== ACTIVE LINK ===== */
const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
    if(linkColor) {
        // linkColor.forEach(l => l.classList.remove('active'))
        // this.classList.add('active')
        this.classList.toggle('dropdown_link')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


/* ===== Chart JS ===== */
var myChart = document.getElementById('myChart').getContext('2d');

var barChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],

        datasets: [{
            label: 'Orders',
            backgroundColor: 'rgb(255, 89, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 10, 5, 2, 20, 30, 20, 30, 25, 10, 5, 10],
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false,
            },
        }
    }
});

var myChart2 = document.getElementById('myChart2').getContext('2d');

var carChart = new Chart(myChart2, {
    type: 'doughnut',
    data: {
        labels: [
            'Lorem1',
            'Lorem2',
            'Lorem3',
        ],

        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                '#005bea',
                '#f93a5a',
                '#f76a2d',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [10, 5, 2],
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
});