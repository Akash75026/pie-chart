const ctx = document.getElementById('trafficChart').getContext('2d');

const trafficData = {
    labels: ['Social Media', 'Search Engines', 'Email Marketing', 'Referrals', 'Direct'],
    datasets: [{
        label: 'Traffic Sources',
        data: [30, 40, 15, 10, 5], // Percentage values
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)', // Color for Social Media
            'rgba(255, 99, 132, 0.6)', // Color for Search Engines
            'rgba(255, 159, 64, 0.6)', // Color for Email Marketing
            'rgba(153, 102, 255, 0.6)', // Color for Referrals
            'rgba(54, 162, 235, 0.6)'   // Color for Direct
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};

const trafficChart = new Chart(ctx, {
    type: 'pie',
    data: trafficData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333', // Legend text color
                }
            },
            title: {
                display: true,
                text: 'Distribution of Website Traffic Sources',
                color: '#333', // Title text color
                font: {
                    size: 16, // Title font size
                }
            }
        }
    }
});
