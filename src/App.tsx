
import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/sidebar'

function App() {
  return  (
    <div className='bg-custom'>
      <div >
        <AppSidebar />
        <main>
        <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
