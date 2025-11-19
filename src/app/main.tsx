
import { createRoot } from 'react-dom/client'
import '../shared/styles/index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import store from "../store/store.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
