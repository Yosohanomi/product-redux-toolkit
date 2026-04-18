import { createRoot } from 'react-dom/client'
import './index.css'
import { Homepage } from './page/Homepage'
import { store } from './app/store/store'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Homepage/>
  </Provider>
)
