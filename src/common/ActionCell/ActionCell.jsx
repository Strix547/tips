import { cloneElement } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Switch } from 'ui'

import * as S from './ActionCell.styled'

import ChartIcon from '@public/icons/chart.svg'
import TrashIcon from '@public/icons/trash.svg'
import PenIcon from '@public/icons/pen.svg'

export const ActionCell = ({ actions = [], active }) => {
  const useFormProps = useForm({
    defaultValues: {
      active
    }
  })

  const activeWatch = useFormProps.watch('active')

  const onActionClick = (e) => {
    e.stopPropagation()
  }

  const findActiondByLabel = (actions, label) => {
    return actions.find((action) => action.label === label)
  }

  const createAction = (label, content, actions) => {
    return {
      label,
      content: cloneElement(content, {
        onClick: () => findActiondByLabel(actions, label)?.onClick({ active: activeWatch })
      })
    }
  }

  const actionPresets = [
    createAction(
      'edit',
      <button type="button">
        <PenIcon />
      </button>,
      actions
    ),
    createAction('active', <Switch name="active" />, actions),
    createAction(
      'delete',
      <button type="button">
        <TrashIcon />
      </button>,
      actions
    ),
    createAction(
      'chart',
      <button type="button">
        <ChartIcon />
      </button>,
      actions
    )
  ]

  const renderActionsSorted = (actions, presets) => {
    return actions
      .sort((a, b) => {
        const aOrder = findActiondByLabel(actions, a.label).order
        const bOrder = findActiondByLabel(actions, b.label).order

        return aOrder - bOrder
      })
      .map(({ label }) => findActiondByLabel(presets, label).content)
  }

  return (
    <S.ActionCell onClick={onActionClick}>
      <FormProvider {...useFormProps}>{renderActionsSorted(actions, actionPresets)}</FormProvider>
    </S.ActionCell>
  )
}
