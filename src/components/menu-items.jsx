import { SiCoffeescript, SiBuymeacoffee  } from "react-icons/si";
import { GiCoffeeMug, GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { BiSolidCoffeeBean, BiSolidCoffeeTogo } from "react-icons/bi";




const MenuItems = () => {
  return (
    <div className="relative top-20 p-4">
      <h2 className="text-3xl text-center my-16 font-extrabold drop-shadow-md">
        Know our offers!
      </h2>
      <section className="">
        <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <SiCoffeescript className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
        <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <SiBuymeacoffee className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
        <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <GiCoffeeMug className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
      </section>
      <section>
      <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <GiCoffeeCup className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
        <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <GiCoffeeBeans className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
        <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <BiSolidCoffeeTogo className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
        <article className="flex flex-row items-center rounded-xl shadow-xl p-3 hover:translate-y-2 duration-100 hover:cursor-pointer">
          <BiSolidCoffeeBean className="size-24 rounded-lg bg-[#f2f24c] p-4"/>
          <p className="mx-4 p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis explicabo, hic tenetur eaque rerum odio repudiandae ducimus ad perferendis aut magnam ut cum? Ducimus adipisci repudiandae accusamus modi fugit.
          </p>
        </article>
      </section>
    </div>
  )
}

export default MenuItems; 