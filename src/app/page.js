
import Home from './components/Home'
import ContextProvider from './store/ContextProvider'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Home />
      </ContextProvider>
    </>
  )
}

export default page