import Image from 'next/image'

import * as S from './Image.styled'

export const QrImage = ({ src }) => {
  return (
    <S.QrImage>
      <Image src={src} alt="qr code" width={150} height={150} />
    </S.QrImage>
  )
}
