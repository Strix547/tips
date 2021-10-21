export const handleResponse = ({ status, statusText, data }, errorCodeLabels = []) => {
  const codes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226]
  if (codes.includes(status)) return data

  const errorCode = data?.code
  const haveErrorLabel = errorCodeLabels.some((error) => error?.code === errorCode)

  if (errorCode && haveErrorLabel) {
    throw new Error(errorCodeLabels.find((error) => error?.code === errorCode)?.label)
  }

  if (errorCode) {
    throw new Error(errorCode)
  }

  throw new Error(`${status} ${statusText}`)
}
