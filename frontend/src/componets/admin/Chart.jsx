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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "chart.kjs"
        }
    }
}
const labels = ["Январь", "Февраль", "Март", "Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
const priv = [500, 300, 600, 300, 300, 400, 500, 700, 100, 200, 400, 300]
const sell = [450, 400, 300, 300, 400, 500, 500, 100, 300, 500, 100, 200]
export const data = {
    labels,
    datasets: [
        {
            label: 'Привоз',
            data: priv,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Продано',
            data: sell,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ]
}
const Chart = () => {
    const ost = () => {
        const remain = priv.map((prod, index) => prod - sell[index])
        return remain
    }

    const remainInvent = ost()
    return (
        <>
            <Line data={data} options={options}></Line>

        </>
    )
}

export default Chart