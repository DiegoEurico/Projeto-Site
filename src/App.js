import React from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider }
  from '@material-ui/core'
/* consulte as cores em https://www.materialpalette.com */
import { orange, lightBlue, blue, deepOrange } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

import Rotas from './rotas'

function App() {
  const temaDark = false
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? orange[500] : blue[500]
  const corSecundaria = temaDark ? deepOrange[900] : lightBlue[400]

  let theme = createMuiTheme(
    {
      palette: {
        type: tipoPaleta,
        primary: {
          main: corPrimaria
        },
        secondary: {
          main: corSecundaria
        }
      }
    }
  )
theme = responsiveFontSizes (theme)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Rotas />      
    </MuiThemeProvider>
  )
}

export default App