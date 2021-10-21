import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'

import * as supportApi from 'api/support'
import * as userApi from 'api/user'

export const supportStore = makeAutoObservable({
  isMessageSending: false,

  sendMessageToSupport: async ({ firstName, phone, email, theme, message, files }) => {
    try {
      supportStore.isMessageSending = true

      if (!files.length) {
        await supportApi.sendMessageToSupport({ firstName, phone, email, theme, message })
      } else {
        const filePromises = files.map((file) => {
          const formData = new FormData()
          formData.append('file', file)
          return userApi.uploadFile(formData)
        })

        const fileIds = await Promise.all(filePromises)

        await supportApi.sendMessageToSupport({
          firstName,
          phone,
          email,
          theme,
          message,
          fileIds: fileIds.map(({ fileId }) => fileId)
        })
      }

      toast.success('Message sended')
    } catch ({ message }) {
      toast.error('Failed to send message')
    } finally {
      supportStore.isMessageSending = false
    }
  }
})
