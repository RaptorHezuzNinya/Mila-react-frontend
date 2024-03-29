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

const redA      = '#FF6666'

const transparent = 'rgba(0, 0, 0, 0)'

// Palette
export const palette = {
  primary1Color: greenA,
  primary2Color: blueB,
  primary3Color: blueC,
  accent1Color: greenA,  // secondary color
  accent2Color: redA,
  accent3Color: greenC,
  accent4Color: steelA,
  accent5Color: steelB,
  accent6Color: steelC,
  accent7Color: greyA,
  accent8Color: greyB,
  textColor: blueA,

  // alternateTextColor: steelC,
  // canvasColor: white,
  // borderColor: grey,
  // disabledColor: grey30
}

// Font
// export const fontFamily = 'Montserrat, sans-serif'
//
// // Typography
// export const typography = {
//   fontWeightLight: 300,
//   fontWeightRegular: 400,
//   fontWeightMedium: 500,
//   fontWeightSemBold: 600,
//   fontWeightBold: 700
// }
//
// export const flatButton = {
//   fontWeight: typography.fontWeightLight
// }

export const textField = {
  focusColor: palette.accent7Color,
}

export default getMuiTheme({ palette, textField })
