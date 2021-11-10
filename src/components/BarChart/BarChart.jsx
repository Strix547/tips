import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'

import { NoResultFound } from 'common'

import { createChartTooltip } from 'utils'

import * as S from './BarChart.styled'

export const BarChart = ({ title, data, isLoading, noText = 'Нет данных', gradient = 'red' }) => {
  const labels = data.map(({ date }) => date?.getDate())
  const values = data.map(({ tipAmount }) => tipAmount)

  const gradientRedColors = ['#F25B2B', '#E04A2D', '#F5CE58']
  const gradientBlueColors = ['#6B2BF2', '#2DAAE0', '#4ED85C']

  const createLinearGradient = (canvas, gradientColors) => {
    const ctx = canvas.getContext('2d')
    const w = canvas.width
    const h = canvas.height
    const cx = w / 2
    const cy = h / 2
    const cssAng = 269
    const canAng = cssAng - 90
    const ang = (canAng - 90) * (Math.PI / 180)
    const hypt = cy / Math.cos(ang)
    const fromTopRight = cx - Math.sqrt(hypt * hypt - cy * cy)
    const diag = Math.sin(ang) * fromTopRight
    const len = hypt + diag
    const topX = cx + Math.cos(-Math.PI / 2 + ang) * len
    const topY = cy + Math.sin(-Math.PI / 2 + ang) * len
    const botX = cx + Math.cos(Math.PI / 2 + ang) * len
    const botY = cy + Math.sin(Math.PI / 2 + ang) * len

    const gradient = ctx.createLinearGradient(topX, topY, botX, botY)
    gradient.addColorStop(0, gradientColors[0])
    gradient.addColorStop(0.5, gradientColors[1])
    gradient.addColorStop(1, gradientColors[2])

    return gradient
  }

  const getBarData = (canvas) => {
    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            createLinearGradient(
              canvas,
              gradient === 'red' ? gradientRedColors : gradientBlueColors
            )
          ],
          borderRadius: { topLeft: 5, topRight: 5 }
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
    external: (context) => createChartTooltip(context, 45, 30)
  }

  const scales = {
    x: {
      grid: {
        display: false
      },
      ticks: {
        padding: 8,
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
        borderDash: [15, 16],
        borderColor: 'red',
        drawBorder: false,
        circular: true,
        drawTicks: false,
        color: '#ebebed'
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
        padding: 12,
        crossAlign: 'far'
      }
    }
  }

  const barContainer = (
    <S.BarContainer>
      {data.length !== 0 ? (
        <Bar
          data={getBarData}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip
            },
            scales,
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      ) : (
        <NoResultFound>{noText}</NoResultFound>
      )}
    </S.BarContainer>
  )

  return (
    <S.BarChart>
      <S.Heading level={6}>{title}</S.Heading>

      {!isLoading ? barContainer : <Skeleton height={250} />}
    </S.BarChart>
  )
}
