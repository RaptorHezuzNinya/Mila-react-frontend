import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
const greenA    = '#52be9c'
const greenB    = '#3c8c73'
const greenC    = '#47a688'

const blueA     = '#292f36'
const blueB     = '#37414d'
const blueC     = '#485666'

const steelA    = '#737a80'
const steelB    = '#dadce0'
const steelC    = '#f2f6fa'

const greyA     = '#cccccc'
const greyB     = '#ffffff'

// Palette
export const palette = {
  primary1Color: blueA,
  primary2Color: greyA,
  primary3Color: steelA,
  textColor: blueA,
}

export default getMuiTheme({ palette })
