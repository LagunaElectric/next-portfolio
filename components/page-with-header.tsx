import Header from "./header"
import Head from "next/head"

export interface PageWithHeaderProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

const PageWithHeader: React.FC<PageWithHeaderProps> = ({title, description, children}) => {
  return (
    <>
      <Head>
        <title>{'LBS' + (title ? ' | ' + title : '')}</title>
        <meta name="description" content={description ?? "Generated by create next app"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className='bg-sky-50 dark:bg-slate-800 dark:text-gray-200'>
          {children ?? (
            <div>
              <h1 className="text-6xl">Try putting some content in here!</h1>
            </div>
            )
          }
        </div>
      </main>
    </>
  )
}

export default PageWithHeader