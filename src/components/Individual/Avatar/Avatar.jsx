import Image from 'next/image'

import * as S from './Avatar.styled'

export const AvatarIndividual = ({ avatar, firstName, lastName }) => {
  return (
    <S.AvatarIndividual>
      <S.Avatar>
        <Image src={avatar} width={90} height={90} alt={`фото ${firstName} ${lastName}`} />
      </S.Avatar>

      <S.Text>
        <span>{firstName}</span> <span>{lastName}</span>
      </S.Text>
    </S.AvatarIndividual>
  )
}
