import { useMediaQuery } from 'react-responsive'

import { Sidebar, Header } from 'layout'

import { Button } from 'ui'

import * as S from './Account.styled'

import CrossCircleIcon from '@public/icons/cross-circle.svg'

export const AccountLayout = ({ title, button, children, styles }) => {
  const screenMore1280 = useMediaQuery({ minWidth: 1281 })

  return (
    <S.AccountLayout styles={styles}>
      {screenMore1280 && <Sidebar />}
      <Header withSidebar />

      <S.Content>
        {title && (
          <S.ContentHead>
            <S.Heading level={5}>{title}</S.Heading>

            {button && (
              <Button iconStart={<CrossCircleIcon />} size="inline" onClick={button.onClick}>
                {button.label}
              </Button>
            )}
          </S.ContentHead>
        )}

        {children}
      </S.Content>
    </S.AccountLayout>
  )
}
