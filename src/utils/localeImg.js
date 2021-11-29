export const localeImg = (locale, imgRU, imgEn, imgFr) => {
  switch (locale) {
    case 'ru':
      return imgRU
    case 'en':
      return imgEn
    case 'fr':
      return imgFr
  }
}
