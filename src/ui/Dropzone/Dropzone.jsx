import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import * as S from './Dropzone.styled'

export const Dropzone = ({ children, onFileChange, ...props }) => {
  const onDropAccepted = useCallback(
    ([file]) => {
      if (!file) return
      // const notImage = !file?.type?.includes('image')

      onFileChange(file)

      // if (notImage) {
      //   return
      // }
      //
      // const reader = new FileReader()
      // reader.readAsDataURL(file)
      // reader.addEventListener('load', () => {
      //   onFileChange({ src: reader.result, name: file.name })
      // })
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
