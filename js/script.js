var ctx = document.getElementById('myChartjs').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["JavaScript: 60%", "HTML: 60%", "CSS: 60%", "REACTJS: 60%"],
        datasets: [{
            data: [150, 90, 70,50],
            backgroundColor: ['blue', 'red', 'yellow', 'green'],
        }],
    }
});



