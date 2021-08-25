import * as S from './BarChart.styled'

export const BarChart = ({ title }) => {
  const ctx = document.getElementById('chart')?.getContext('2d')
  const gradientStroke = ctx?.createLinearGradient(500, 0, 100, 0)
  gradientStroke?.addColorStop(0, '#F25B2B')
  gradientStroke?.addColorStop(0.5, '#E04A2D')
  gradientStroke?.addColorStop(1, '#F5CE58')

  const barData = {
    labels: [
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
    datasets: [
      {
        data: [590, 410, 580, 600, 590, 590, 420, 480, 490, 500, 539, 500, 420, 480, 510, 440, 510],
        backgroundColor: [gradientStroke],
        borderRadius: { topLeft: 5, topRight: 5 }
      }
    ]
  }

  return (
    <S.BarChart>
      <S.Heading level={6}>{title}</S.Heading>

      <S.Bar
        id="chart"
        data={barData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              }
            }
          }
        }}
      />
    </S.BarChart>
  )
}
