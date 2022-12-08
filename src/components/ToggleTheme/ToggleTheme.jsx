import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export function ToggleTheme(){
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList
  
  const toggle = () => {
    pageClasses.toggle('dark');
  }

  useEffect (() => {
    systemPreference && (
      pageClasses.add('dark')
    );
  });
  
  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block cursor-pointer dark:hidden" onClick={toggle} />
      <SunIcon className="h-8 text-gray-100 hidden cursor-pointer dark:block" onClick={toggle} />
    </div>
  )
}