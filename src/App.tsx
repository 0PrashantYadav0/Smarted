
import { Outlet } from 'react-router-dom'

function App() {
  return  (
    <div className='bg-custom'>
      <div >
        {/* <Navbar /> */}
        <main>
        <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
