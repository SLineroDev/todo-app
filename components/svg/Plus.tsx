import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function PlusSvg(props: SvgProps) {
  return (
    <Svg width={58} height={58} fill="none" {...props} >
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M29 .583C13.306.583.583 13.306.583 29S13.306 57.417 29 57.417 57.417 44.694 57.417 29 44.694.583 29 .583zm2.583 38.75a2.583 2.583 0 11-5.166 0v-7.75h-7.75a2.583 2.583 0 110-5.166h7.75v-7.75a2.583 2.583 0 115.166 0v7.75h7.75a2.583 2.583 0 110 5.166h-7.75v7.75z"
        fill="#94D28A" />
    </Svg>
  )
}

export default PlusSvg
