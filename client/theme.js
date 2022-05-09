import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#8eacbb',
      main: '#01448A',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#FFCB05',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: grey['900'],
      type: 'light'
    }
  })

  export default theme