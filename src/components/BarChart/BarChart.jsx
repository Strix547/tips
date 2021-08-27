import * as S from './BarChart.styled'

export const BarChart = ({ title }) => {
  const getBarData = (canvas) => {
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

    return {
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
          data: [
            590, 410, 580, 580, 590, 590, 420, 480, 490, 500, 539, 500, 420, 480, 510, 440, 510
          ],
          backgroundColor: [gradient],
          borderRadius: { topLeft: 5, topRight: 5 }
        }
      ]
    }
  }

  const createTooltip = (context) => {
    // Tooltip Element
    let tooltipEl = document.getElementById('chartjs-tooltip')
    // const triangleEl = document.getElementById('chartjs-tooltip-triangle')

    // Create element on first render
    if (!tooltipEl) {
      tooltipEl = document.createElement('div')
      tooltipEl.id = 'chartjs-tooltip'
      tooltipEl.innerHTML = '<table></table>'
      document.body.appendChild(tooltipEl)
    }

    // Hide if no tooltip
    const tooltipModel = context.tooltip
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = 0
      return
    }

    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform')
    if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign)
    } else {
      tooltipEl.classList.add('no-transform')
    }

    function getBody(bodyItem) {
      return bodyItem.lines
    }

    // Set Text
    if (tooltipModel.body) {
      const bodyLines = tooltipModel.body.map(getBody)

      let innerHtml = '</tbody>'
      // innerHtml += '<span id="chartjs-tooltip-triangle"></span>'

      bodyLines.forEach((body, i) => {
        const colors = tooltipModel.labelColors[i]
        let style = `background: #fff`
        style += `; border-color:${colors.borderColor}`
        style += '; border-width: 2px'
        const span = `<span style="${style}"></span>`
        innerHtml += `<tr><td>${span}${body}</td></tr>`
      })

      const tableRoot = tooltipEl.querySelector('table')
      tableRoot.innerHTML = innerHtml
    }

    const position = context.chart.canvas.getBoundingClientRect()

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1
    tooltipEl.style.position = 'absolute'
    tooltipEl.style.left = `${position.left + window.pageXOffset + tooltipModel.caretX - 30}px`
    tooltipEl.style.top = `${position.top + window.pageYOffset + tooltipModel.caretY - 45}px`
    tooltipEl.style.display = 'flex'
    tooltipEl.style.justifyContent = 'center'
    tooltipEl.style.alignItems = 'center'
    tooltipEl.style.padding = '7px 15px 5px'
    tooltipEl.style.fontFamily = 'Formular'
    tooltipEl.style.fontWeight = 500
    tooltipEl.style.fontSize = 14
    tooltipEl.style.lineHeight = '20px'
    tooltipEl.style.backgroundColor = '#fff'
    tooltipEl.style.border = '1px solid #eeeff2'
    tooltipEl.style.borderRadius = '10px'
    tooltipEl.style.boxShadow = '0px 5px 30px rgba(157, 157, 159, 0.2)'
    tooltipEl.style.boxSizing = 'border-box'
    tooltipEl.style.pointerEvents = 'none'
    tooltipEl.style.transition = '0.3s'

    // triangleEl.style.position = 'absolute'
    // triangleEl.style.width = 32
    // triangleEl.style.height = 17
    // triangleEl.style.bottom = 0
    // triangleEl.style.left = '50%'
    // triangleEl.style.transform = 'translateX(-50%)'
    // triangleEl.style.borderWidth = 10
    // triangleEl.style.borderStyle = 'solid'
    // triangleEl.style.borderColor = 'transparent #FFFFFF transparent transparent'
  }

  const tooltip = {
    callbacks: {
      title() {
        return null
      }
    },
    enabled: false,
    external: createTooltip
  }

  const scales = {
    x: {
      grid: {
        display: false
      },
      ticks: {
        padding: 15,
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
        padding: 15,
        color: '#9FA0A0',
        font: {
          family: 'Formular',
          size: 14,
          weight: 500
        }
      }
    }
  }

  return (
    <S.BarChart>
      <S.Heading level={6}>{title}</S.Heading>

      <S.Bar
        data={getBarData}
        options={{
          plugins: {
            legend: {
              display: false
            },
            tooltip
          },
          scales,
          maintainAspectRatio: false
        }}
      />
    </S.BarChart>
  )
}
