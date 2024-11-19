import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <main className="p-10">
      <Outlet />
      <Toaster/>
    </main>
  )
}

export default App
