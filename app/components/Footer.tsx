import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className = "w-full py-4 px-2 justify-between">
      <Image src = "/static/logo.svg" width = {300} height = {300} alt = "Mt. SAC CS Club logo"/>
    </div>
  )
}

export default Footer