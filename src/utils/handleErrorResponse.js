export const handleErrorResponse = ({ response, request, message }) => {
  let errorResponse

  if (response && response.data) {
    errorResponse = response.data
  } else if (request) {
    errorResponse = request.message || request.statusText
  } else {
    errorResponse = message
  }

  throw new Error(errorResponse)
}
