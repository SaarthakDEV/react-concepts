import { Provider } from 'react-redux'
import './App.css'
import Redux from './Chapters/1-Redux'
import Immer from './Chapters/2-Immer'
import Middleware from './Chapters/3-Middleware'
import Thunk from './Chapters/4-Thunk'
import ReduxToolkit from './Chapters/5-ReduxToolkit'
import Connect from './Chapters/6-Connect'
import store from './Chapters/6-Connect/store'

function App() {

  return (
    // <Redux />
    // <Immer />
    // <Middleware />
    // <Thunk />
    // <ReduxToolkit />

    <Provider store={store}>
      <Connect />
    </Provider>
  )
}

export default App
