import { Line } from 'react-chartjs-2'

import { createChartTooltip } from 'utils'

import * as S from './LineChart.styled'

export const LineChart = ({
  labels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  values = [0, 400, 200, 300, 700, 300, 200, 800, 200, 100, 400, 200],
  title
}) => {
  const getLineData = (canvas) => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 320)
    gradient.addColorStop(0, 'rgba(57, 158, 41, 0.3)')
    gradient.addColorStop(1, 'rgba(57, 158, 41, 0)')

    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: gradient,
          borderColor: '#3bc76b',
          pointRadius: 8,
          pointHoverRadius: 8,
          pointBorderWidth: 3,
          pointHoverBorderWidth: 3,
          pointBorderColor: '#fff',
          pointBackgroundColor: '#156BED',
          pointHoverBackgroundColor: '#156BED',
          hoverBorderColor: '#fff'
        }
      ]
    }
  }

  const tooltip = {
    callbacks: {
      title() {
        return null
      }
    },
    enabled: false,
    external: (context) => createChartTooltip(context, 55, 30)
  }

  const scales = {
    x: {
      grid: {
        borderDash: [17, 11],
        borderWidth: 2,
        borderColor: 'red',
        drawBorder: false,
        circular: true,
        drawTicks: false,
        color: '#f2f2f3'
      },
      ticks: {
        padding: 30,
        color: '#313436',
        font: {
          family: 'Formular',
          size: 14,
          weight: 500
        }
      }
    },
    y: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        callback(value, index) {
          if (index % 2 === 0) return value
        },
        color: '#9FA0A0',
        font: {
          family: 'Formular',
          size: 14,
          weight: 500
        },
        padding: 20,
        crossAlign: 'far'
      }
    }
  }

  return (
    <S.LineChart>
      <S.Heading level={6}>{title}</S.Heading>

      <S.LineChartContainer>
        <Line
          data={getLineData}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip
            },
            scales,
            responsive: true,
            maintainAspectRatio: false,
            fill: true
          }}
        />
      </S.LineChartContainer>
    </S.LineChart>
  )
}
