import { LogOut } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/guilherhenri.png"
        alt="profile"
        className="rounded-full"
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Guilherme Henrique
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          guilherhenri12@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
