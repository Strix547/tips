import dynamic from 'next/dynamic'

const LineChart = dynamic(() => import('./LineChart').then((mod) => mod.LineChart))

export { LineChart }
