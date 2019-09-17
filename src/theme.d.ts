// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    // mode: string,
    primaryColor: string,
    // secondaryColor: string,
    // backgroundImage: string,
    // fontSize: number,
    // fontFamily: string,
    // spacing: number,
  }
}
