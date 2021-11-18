import dynamic from 'next/dynamic'

const TrustUsSection = dynamic(() => import('./TrustUs').then((mod) => mod.TrustUsSection))

export { TrustUsSection }
