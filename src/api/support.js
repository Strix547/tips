import { API } from 'core/axios'

export const sendMessageToSupport = async ({
  firstName,
  phone,
  email,
  theme,
  message,
  fileIds
}) => {
  try {
    const { data } = await API.post(`/send-support-service-message`, {
      firstName,
      phone,
      email,
      letterSubject: theme,
      message,
      fileIds
    })

    return data
  } catch ({ message }) {
    throw new Error(message)
  }
}
