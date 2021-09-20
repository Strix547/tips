import { useMediaQuery } from 'react-responsive'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'

import { createTooltip } from 'utils'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './BarChart.styled'

export const BarChart = ({
  title,
  labels = [
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31'
  ],
  values = [590, 410, 580, 580, 590, 590, 420, 480, 490, 500, 539, 500, 420, 480, 510, 440, 510],
  isLoading
}) => {
  const screenTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

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
    const getArrBaseOnWidth = (arr) => {
      const windowWidth = window.outerWidth

      if (windowWidth <= 470) {
        return arr.slice(0, 5)
      }

      if (windowWidth <= MEDIA_TABLET) {
        return arr.slice(0, 10)
      }

      return arr.slice(0, 17)
    }

    return {
      labels: getArrBaseOnWidth(labels),
      datasets: [
        {
          data: getArrBaseOnWidth(values, screenTablet),
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
    external: (context) => createTooltip(context, 45, 30)
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

          <S.Month>Май</S.Month>
        </>
      ) : (
        <Skeleton height={250} />
      )}
    </S.BarChart>
  )
}
