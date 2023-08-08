import './App.css'
import { Link, Route } from 'wouter'
import { Sphere } from './sites'

function App() {

  return (
    <>
      <Route path='/info'>
        <div className={'flex h-[100vh] bg-primary'}>
          <div className={'m-auto flex  h-1/3 w-1/2 rounded-lg bg-slate-800 text-xl'}>
            <div className={'relative m-auto flex flex-col text-white'}>
              <div>
                Site is under construction...
              </div>
              <Link to='/' className={'absolute right-2 top-8 m-auto mt-0 w-full text-center text-sm text-gray-300 duration-200 hover:text-white'}>
                {'<- Go back to sphere'}
              </Link>
            </div>

          </div>
        </div>
      </Route>
      <Route path='/'>
        <Sphere />
      </Route>
    </>
  )
}

export default App
