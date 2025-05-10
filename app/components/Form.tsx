import React from 'react'

/**
 * Form component displays a link to an external form with a consistent style.
 * @param title - The display text for the form link
 * @param href - The URL to the form
 */
interface FormProps {
  title: string;
  href: string;
}

const Form = ({ title, href }: FormProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full text-center items-center py-2 rounded-md border-[1px] block bg-transparent hover:bg-black/90 hover:text-white duration-400 hover:border-white ease-in-out transition"
      aria-label={`Open ${title} in a new tab`}
    >
      {title}
    </a>
  )
}

export default Form