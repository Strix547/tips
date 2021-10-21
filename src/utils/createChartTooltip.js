export const createChartTooltip = (context, offsetTop, offsetLeft) => {
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
  tooltipEl.style.left = `${
    position.left + window.pageXOffset + tooltipModel.caretX - offsetLeft
  }px`
  tooltipEl.style.top = `${position.top + window.pageYOffset + tooltipModel.caretY - offsetTop}px`
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
  tooltipEl.style.transition = 'opacity 0.3s'
}
