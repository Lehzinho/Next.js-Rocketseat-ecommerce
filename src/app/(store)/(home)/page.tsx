import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-row-6 gap-6">
      <Link
        href="/"
        className="col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          className=""
          width={830}
          height={830}
          quality={100}
          alt="camiseta dowhile"
        />
      </Link>
    </div>
  )
}
