import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextsProvider } from './contexts/CycleContexts'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextsProvider>
          <Router />
        </CyclesContextsProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
