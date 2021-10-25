import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'

import { createChartTooltip } from 'utils'

import * as S from './BarChart.styled'

export const BarChart = ({ title, data, isLoading }) => {
  const labels = data.map(({ date }) => date?.getDate())
  const values = data.map(({ tipAmount }) => tipAmount)

  const createLinearGradient = (canvas) => {
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
    gradient.addColorStop(0, '#F25B2B')
    gradient.addColorStop(0.5, '#E04A2D')
    gradient.addColorStop(1, '#F5CE58')

    return gradient
  }

  const getBarData = (canvas) => {
    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [createLinearGradient(canvas)],
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

  return (
    <S.BarChart>
      <S.Heading level={6}>{title}</S.Heading>

      {!isLoading ? (
        <>
          <S.BarContainer>
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
          </S.BarContainer>

          {/* <S.Month>Май</S.Month> */}
        </>
      ) : (
        <Skeleton height={250} />
      )}
    </S.BarChart>
  )
}
