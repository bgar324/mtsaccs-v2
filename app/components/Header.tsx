import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className = "w-full py-4 px-2 justify-between border-b-[1px] border-gray-300">
      <Image src = "/static/logo.svg" width = {75} height = {75} alt = "Mt. SAC CS Club logo"/>
    </div>
  )
}

export default Header