import { useRoutes } from 'hooks/useRoutes'
import 'App.scss'

const App = () => {
  const routes = useRoutes(false)

  return <div className='app'>{routes}</div>
}

export default App
