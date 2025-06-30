import { PencilIcon, TrashIcon } from "@phosphor-icons/react"


function CardGame() {
  return (
    <div className="flex flex-col bg-white rounded-lg gap-8 overflow-hidden">
      <div className="flex justify-end gap-0.5 mt-4 mr-3.5">
        <PencilIcon size={32} className="cursor-pointer" />
        <TrashIcon size={32} className="cursor-pointer" />
      </div>

      <div className="flex flex-col items-center">
        <img src="https://ik.imagekit.io/j8alkuh75t/kena.png?updatedAt=1750968905701" alt="Capa Kena: Bridge of Spirits"
          className="w-3/5"
        />

        <h2 className="uppercase py-2">Kena: Bridge of Spirits</h2>
        <p className="font-bold text-xl">R$ 350,99</p>
        <span className="italic text-sm">Categoria: Aventura</span>
      </div>

      <button className="bg-teal-600 text-white w-full py-3 transition delay-2
        hover:bg-teal-800 cursor-pointer
      ">
        Comprar
      </button>

    </div>
  )
}

export default CardGame