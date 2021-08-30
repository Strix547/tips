import Image from 'next/image'

import * as S from './IndividualAvatar.styled'

export const IndividualAvatar = ({ avatar, firstName, lastName }) => {
  return (
    <S.IndividualAvatar>
      <S.Avatar>
        <Image src={avatar} alt={`фото ${firstName} ${lastName}`} />
      </S.Avatar>

      <S.Text>
        <span>{firstName}</span> <span>{lastName}</span>
      </S.Text>
    </S.IndividualAvatar>
  )
}
