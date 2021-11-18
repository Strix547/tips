import dynamic from 'next/dynamic'

const ServiceWorkSteps = dynamic(() =>
  import('./ServiceWorkSteps').then((mod) => mod.ServiceWorkSteps)
)

export { ServiceWorkSteps }
