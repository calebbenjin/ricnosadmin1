import Image from 'next/image'


export default function Logo() {
  return (
    <div>
      <Image
        src="/ricnoslogo.png"
        alt="Picture of the author"
        width="50"
        height="30"
      />
    </div>
  )
}


export function LogoOne() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Picture of the author"
        width="40"
        height="40"
      />
    </div>
  )
}
