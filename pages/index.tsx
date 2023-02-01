import { Inter } from '@next/font/google'
import PageWithHeader from '@/components/page-with-header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageWithHeader title='Home'>
      <div className="flex flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold">Welcome to My Portfolio!</h1>
      </div>
    </PageWithHeader>
  )
}
