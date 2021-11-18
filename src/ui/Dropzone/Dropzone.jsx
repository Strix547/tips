import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import * as S from './Dropzone.styled'

export const Dropzone = ({ children, onFileChange, ...props }) => {
  const onDropAccepted = useCallback(
    ([file]) => {
      if (!file) return
      onFileChange(file)
    },
    [onFileChange]
  )

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    ...props,
    onDropAccepted
  })

  return (
    <S.Dropzone {...getRootProps()} isDragAccept={isDragAccept} isDragReject={isDragReject}>
      <input {...getInputProps()} />
      {children}
    </S.Dropzone>
  )
}
