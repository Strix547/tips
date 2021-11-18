import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('./BarChart').then((mod) => mod.BarChart))

export { BarChart }
