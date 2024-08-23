import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart({ chartData }) {
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Đơn hàng',
                data: chartData.totalOrders,
                borderWidth: 1,
                pointStyle: false,
                borderColor: 'rgb(29, 78, 216)',
                backgroundColor: 'rgba(29, 78, 216, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
}

export default LineChart;
