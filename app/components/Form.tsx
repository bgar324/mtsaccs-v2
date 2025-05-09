import React from 'react'

interface FormProps {
  title: string;
  href: string;
}

const Form = ({ title, href }: FormProps) => {
  return (
    <a 
      href={href} 
      className="w-full text-center items-center py-2 rounded-md border-[1px] block bg-transparent hover:bg-black/90 hover:text-white duration-400 hover:border-white ease-in-out transition"
    >
      {title}
    </a>
  )
}

export default Form