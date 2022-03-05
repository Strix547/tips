import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Accordion, AccordionSummary, AccordionDetails } from 'ui'

import * as S from './QaBlock.styled'

import stripe from '@public/img/landing/new/stripe.png'
import pciDss from '@public/img/landing/new/pci-dss.png'
import ssl from '@public/img/landing/new/ssl.png'
import PlusIcon from '@public/img/landing/new/icons/plus.svg'

export const QaBlock = () => {
  const { t } = useTranslation('common')

  const [expandedQuestion, setExpandedQuestion] = useState('')

  const qa = [
    {
      q: 'Для чего нужен QR-код и как им пользоваться1?',
      a: 'Индивидуальный QR-код каждого сотрудника печатается на пречеке или наклейке и ведет на страницу, где можно оставить чаевые или отзыв. Для сканирования QR-кода необходимо просто открыть камеру телефона, навести ее на QR-код и перейти по ссылке.'
    },
    {
      q: 'Для чего нужен QR-код и как им пользоваться2?',
      a: 'Индивидуальный QR-код каждого сотрудника печатается на пречеке или наклейке и ведет на страницу, где можно оставить чаевые или отзыв. Для сканирования QR-кода необходимо просто открыть камеру телефона, навести ее на QR-код и перейти по ссылке.'
    },
    {
      q: 'Для чего нужен QR-код и как им пользоваться3?',
      a: 'Индивидуальный QR-код каждого сотрудника печатается на пречеке или наклейке и ведет на страницу, где можно оставить чаевые или отзыв. Для сканирования QR-кода необходимо просто открыть камеру телефона, навести ее на QR-код и перейти по ссылке.'
    }
  ]

  const toggleQuestion = (question) => {
    setExpandedQuestion(question === expandedQuestion ? '' : question)
  }

  const qaAccordionItems = qa.map(({ q, a }) => {
    const isExpanded = q === expandedQuestion

    return (
      <Accordion key={q}>
        <AccordionSummary expandIcon={<PlusIcon />} onClick={() => toggleQuestion(q)}>
          <S.AccordionQuestion expanded={isExpanded}>
            <S.Text tag="span">{q}</S.Text>
          </S.AccordionQuestion>
        </AccordionSummary>

        <AccordionDetails>
          <S.AccordionAnswer expanded={isExpanded}>
            <S.Text tag="span">{a}</S.Text>
          </S.AccordionAnswer>
        </AccordionDetails>
      </Accordion>
    )
  })

  return (
    <S.QaBlock>
      <S.Wrapper>
        <S.Body>
          <S.QA>
            <S.Text tag="h5">{t('questions')}</S.Text>

            <S.QaList>{qaAccordionItems}</S.QaList>
          </S.QA>

          <S.CashlessPayments>
            <S.Text tag="h5">Эра безналичных расчетов</S.Text>

            <S.Text>
              Наша цель сохранить высокий уровень клиентского сервиса и обеспечить финансовую защиту
              работникам сферы обслуживания.
            </S.Text>
            <S.Text>
              Предоставляя возможность сотрудникам, которые полагаются на чаевые, получать доход, мы
              повышаем их удовлетворенность работой и моральный дух. Бизнесу мы помогаем сохранить
              рабочие места и улучшать качество обслуживания.
            </S.Text>
            <S.Text>
              Мы создаем комплексное цифровое решение для чаевых, которое органично интегрирует
              безналичные платежи, мгновенную обратную связь в режиме реального времени и управление
              клиентским сервисом.
            </S.Text>
            <S.Text>
              Глубокая аналитика для контроля качества обслужиания, защита персональных данных
              безопасные платежи, обеспеченные стандартом PCI.
            </S.Text>

            <S.Technologies>
              <S.Technology>
                <Image src={stripe} alt="stripe" />
              </S.Technology>

              <S.Technology>
                <Image src={pciDss} alt="pci dss" />
              </S.Technology>

              <S.Technology>
                <Image src={ssl} alt="ssl" />
              </S.Technology>
            </S.Technologies>
          </S.CashlessPayments>
        </S.Body>
      </S.Wrapper>
    </S.QaBlock>
  )
}
