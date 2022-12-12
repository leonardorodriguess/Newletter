export function Input ( props ) {
  return (
    <input className="rounded-full py-1 pl-5 outline-none dark:bg-dark-200 dark:text-gray-200 w-full placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-custom-200 focus:dark:border-custom-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400" { ...props } />
  )
}