import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <div className="flex flex-row items-center justify-between w-full text-gray-200 bg-teal-600 dark:bg-slate-700 h-14">
      <div className='flex flex-row gap-4 ml-4'>
        <Image className='bg-slate-400' src='' alt='logo' />
        <p className='text-2xl'>Test</p>
      </div>
      <ul className={
        `flex flex-row items-center h-full mr-4 text-lg
        [&>*]:w-24 [&>*]:grid [&>*]:place-items-center`
      }>
        <li className=''>
          <button onClick={ switchTheme }>Change Theme</button>
        </li>
        <li className=''>
          <Link href="/projects">Projects</Link>
        </li>
        <li className=''>
          <Link href="/about">About</Link>
        </li>
        <li className=''>
          <Link href="/contact">Contact</Link>
        </li>
        <li className=''>
          <Link href="/blog">Blog</Link>
        </li>
        <li className=''>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header