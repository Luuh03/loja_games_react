import { Link } from "react-router-dom"


function CardCategory() {
  return (
    <div className="rounded-xl flex flex-col overflow-hidden">
      <header className="py-1.5 px-4.5 bg-slate-700 font-bold text-2xl text-white">
        Categoria
      </header>

      <p className="px-4.5 py-7 text-3xl bg-white">Aventura</p>

      <div className="flex text-white">
        <Link to="" className="w-full flex justify-center py-3
          bg-teal-600 hover:bg-teal-800 cursor-pointer transition delay-2
        ">
          Editar
        </Link>
        <Link to="" className="w-full flex justify-center items-center
          bg-red-500 hover:bg-red-700 cursor-pointer transition delay-2
        ">
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategory