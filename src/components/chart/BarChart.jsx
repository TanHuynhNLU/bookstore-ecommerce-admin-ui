import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ chartData }) {
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Thu nhập',
                data: chartData.totalPrices,
                borderWidth: 1,
                pointStyle: false,
                backgroundColor: 'rgb(37,99,235)',
                fill: true,
                borderRadius: 4,
                categoryPercentage: 0.4,
            },
        ],
    };
    return (
        <div className="h-full">
            <Bar options={options} data={data} />
        </div>
    );
}

export default BarChart;
