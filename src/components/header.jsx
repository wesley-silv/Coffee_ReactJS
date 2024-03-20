import { GiCoffeePot } from "react-icons/gi";
import React, {useState} from "react";

const Header = () => {
  const [actionCoffee, setActionCoffee] = useState(true)
  const [openMenu, setOpenMenu] = useState(true)

  const coffeeHandle = () => {
    setActionCoffee(!actionCoffee)
    setOpenMenu(!openMenu)
  }
  return(
    <div className="w-full h-20 p-4 bg-[#ebe454] fixed z-10 shadow-xl drop-shadow-sm">
      {
        actionCoffee ? <GiCoffeePot className="size-10 absolute right-5 cursor-pointer duration-150" title="Open menu" onClick={coffeeHandle}/>
        : <GiCoffeePot className="size-10 absolute right-4 cursor-pointer -rotate-[48deg] duration-150" title="Close menu" onClick={coffeeHandle}/>
      }
      {
        openMenu ? <></> :
        <ul className="w-[20%] max-md:w-[40%] absolute right-0 z-10 mt-20 py-4 px-2 bg-[#ebe454] text-center rounded-sm">
          <li>Home</li>
          <li>----</li>
          <li>---</li>
          <li>---</li>
          <li>---</li>
         </ul> 
      }
    </div>
  )
}

export default Header;