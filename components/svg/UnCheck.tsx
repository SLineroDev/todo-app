import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function UnCheckSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
        stroke="#92C9FB"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default UnCheckSvg