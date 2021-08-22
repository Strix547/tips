const createMedia = (maxWidth) => {
  return `@media (max-width: ${maxWidth}px)`
}

const wrapperHorizontalPaddings = 40

export const MEDIA_LAPTOP = 1170 + wrapperHorizontalPaddings
export const MEDIA_TABLET = 768 + wrapperHorizontalPaddings
export const MEDIA_MOBILE = 375 + wrapperHorizontalPaddings

export const media = {
  createMedia,
  desktop: `@media (min-width: ${MEDIA_LAPTOP}px)`,
  laptop: createMedia(MEDIA_LAPTOP),
  tablet: createMedia(MEDIA_TABLET),
  mobile: createMedia(MEDIA_MOBILE)
}
