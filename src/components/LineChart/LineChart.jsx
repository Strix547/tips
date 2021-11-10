import { Line } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'

import { NoResultFound } from 'common'

import { createChartTooltip } from 'utils'

import * as S from './LineChart.styled'

export const LineChart = ({ data, title, isLoading, noText = 'Нет данных' }) => {
  const labels = data.map(({ date }) => date?.getDate())
  const values = data.map(({ tipAmount }) => tipAmount)

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

  const lineContainer = (
    <S.LineChartContainer>
      {data.length !== 0 ? (
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
      ) : (
        <NoResultFound>{noText}</NoResultFound>
      )}
    </S.LineChartContainer>
  )

  return (
    <S.LineChart>
      {title && <S.Heading level={6}>{title}</S.Heading>}

      {!isLoading ? lineContainer : <Skeleton height={400} />}
    </S.LineChart>
  )
}
