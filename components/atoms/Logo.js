import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image
        src="/ricnoslogo.png"
        alt="Picture of the author"
        width={80}
        height={50}
      />
    </div>
  )
}
