export function Form ({ onSubmit }) {
  const safeSubmit = event => {
    event.preventDefault();
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }
  
  return (
    <div className="h-full flex items-center justify-center mx-auto -mt-20">
      
      <form onSubmit={safeSubmit} className="bg-gray-300 dark:bg-gray-500 flex flex-col gap-10 px-5 py-8 rounded-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">

        <input type="text" required className="custom-input" placeholder="Insira seu nome..." />
        <input type="email" required className="custom-input" placeholder="Insira seu e-mail..." />

        <button type="submit" className="custom-button">Seguir</button>

      </form>

    </div>
  )
}