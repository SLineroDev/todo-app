import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function CheckSvg(props: SvgProps) {
  return (
    <Svg width={22} height={22} fill="none" {...props} >
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm4.768 9.14a1 1 0 10-1.536-1.28l-4.3 5.159-2.225-2.226a1 1 0 00-1.414 1.414l3 3a1.001 1.001 0 001.475-.067l5-6z"
        fill="#92C9FB" />
    </Svg>
  )
}

export default CheckSvg