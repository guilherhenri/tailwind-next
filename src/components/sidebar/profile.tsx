import { LogOut } from 'lucide-react'
import Image from 'next/image'

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
        <span className="truncate text-sm text-zinc-500">
          guilherhenri12@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
