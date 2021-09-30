import { makeAutoObservable } from 'mobx'
import { toast } from 'react-toastify'

import { userStore } from 'store'
import * as supportApi from 'api/support'
import * as userApi from 'api/user'

export const supportStore = makeAutoObservable({
  isMessageSending: false,

  sendMessageToSupport: async ({ theme, message, files }) => {
    try {
      supportStore.isMessageSending = true

      if (!files.length) {
        await supportApi.sendMessageToSupport({ theme, message })
      } else {
        const filePromises = files.map((file) => {
          const formData = new FormData()

          if (userStore.id) {
            formData.append('userId', userStore.id)
          }

          formData.append('file', file)
          return userApi.uploadFile(formData)
        })

        const fileIds = await Promise.all(filePromises)
        await supportApi.sendMessageToSupport({
          theme,
          message,
          fileIds: fileIds.map(({ fileId }) => fileId)
        })
      }

      toast.success('Message successfully sended')
    } catch ({ message }) {
      console.log('error', message)
      toast.error('Failed to send message')
    } finally {
      supportStore.isMessageSending = false
    }
  }
})
