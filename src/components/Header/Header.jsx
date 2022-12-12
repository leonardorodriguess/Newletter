import { MoonIcon } from "@heroicons/react/24/solid"
import { ToggleTheme } from "../index.js";


export function Header ( { user }) {
  return (
    <div className="flex h-20 bg-custom-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá,  {user?.name || "Usuário"} </span>
      <h1>Newletter</h1>
      {/* <input className="hidden sm:block"  type="checkbox" /> */}
      <ToggleTheme />
    </div>
  );
}