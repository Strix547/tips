import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import * as S from './Dropzone.styled'

export const Dropzone = ({ children, accept, onFileChange, ...props }) => {
  const onDrop = useCallback(
    ([file]) => {
      const notImage = file.type.includes('image')

      if (notImage) return file

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
        onFileChange({ src: reader.result, name: file.name })
      })
    },
    [onFileChange]
  )

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    ...props,
    onDrop
  })

  return (
    <S.Dropzone {...getRootProps()} borderGreen={isDragAccept}>
      <input {...getInputProps()} />
      {children}
    </S.Dropzone>
  )
}
