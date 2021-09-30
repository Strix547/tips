import { API } from 'core/axios'

export const sendMessageToSupport = async ({ theme, message, fileIds }) => {
  try {
    const { statusText, status, data } = await API.post(`/send-support-service-message`, {
      letterSubject: theme,
      message,
      fileIds
    })

    if (statusText !== 'ok') {
      throw new Error(status)
    }

    return data
  } catch ({ message }) {
    throw new Error(message)
  }
}
