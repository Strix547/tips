import { EmployeeAvatar, TipAmount, EmodjiSelect } from 'components'
import { Button } from 'ui'

import * as S from './QrPreview.styled'

import avatar from '@public/img/placeholders/avatar.png'
import companyLogo from '@public/img/placeholders/company-logo.png'

export const QrPreview = () => {
  return (
    <S.QrPreview>
      <S.Top>
        <S.Text>Так выглядит ваша страница</S.Text>
      </S.Top>

      <S.EmployeeInfo>
        <EmployeeAvatar
          avatar={avatar}
          company={{ name: 'Фитнес Территория', logo: companyLogo }}
          firstName="Алексей"
          lastName="Коновалов"
        />
      </S.EmployeeInfo>

      <TipAmount />

      <S.ImpressionRow>
        <S.Label>Ваши впечатления</S.Label>
        <EmodjiSelect />
      </S.ImpressionRow>

      <Button>Поблагодарить</Button>

      <S.Text>Tips.me - это сервис для перевод чаевых и донатов.</S.Text>
    </S.QrPreview>
  )
}
