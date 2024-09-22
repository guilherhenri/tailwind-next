import type { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      id="bio"
      defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2
        shadow-sm outline-none focus:border-violet-300 focus:ring-4
        focus:ring-violet-100"
      {...props}
    />
  )
}
