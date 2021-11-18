import dynamic from 'next/dynamic'

const MediaAboutUsSection = dynamic(() =>
  import('./MediaAboutUs').then((mod) => mod.MediaAboutUsSection)
)

export { MediaAboutUsSection }
