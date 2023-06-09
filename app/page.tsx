import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={"/about"}>About</Link>
      <Link href={"/blog"}>Blog</Link>
    </main>
  );
}
