import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar/>
      </main>
      <div> </div>
    </div>
  )
}

export default Home
