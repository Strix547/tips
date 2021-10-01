export const handleResponse = ({ ok, status, statusText, data }, errorCodeLabels) => {
  if (ok) return data

  const errorCode = data?.code
  const haveErrorLabel = errorCodeLabels.some((error) => error.code === errorCode)

  if (errorCode && haveErrorLabel) {
    throw new Error(errorCodeLabels.find((error) => error.code === errorCode).label)
  }

  if (errorCode) {
    throw new Error(errorCode)
  }

  throw new Error(`${status} ${statusText}`)
}
