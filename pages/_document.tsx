import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-sky-50 text-gray-800 dark:bg-slate-800 dark:text-gray-200'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
