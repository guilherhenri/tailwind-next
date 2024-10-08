'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { FileItem } from './file-item'
import { useFileInput } from './root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 flex flex-col gap-3">
      {files.map((file) => (
        <FileItem key={file.name} name={file.name} size={file.size} />
      ))}
    </div>
  )
}
