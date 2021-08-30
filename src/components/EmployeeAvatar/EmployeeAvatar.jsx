import Image from 'next/image'

import * as S from './EmployeeAvatar.styled'

export const EmployeeAvatar = ({ company, avatar, firstName, lastName }) => {
  return (
    <S.EmployeeAvatar>
      <Image src={company.logo} alt={company.name} />

      <S.EmployeeRow>
        <S.Avatar>
          <Image src={avatar} alt={`фото ${firstName} ${lastName}`} />
        </S.Avatar>

        <S.Right>
          <S.Text>
            <span>{firstName}</span> <span>{lastName}</span>
          </S.Text>

          <S.Text>Сотрудник в {company.name}</S.Text>
        </S.Right>
      </S.EmployeeRow>
    </S.EmployeeAvatar>
  )
}
