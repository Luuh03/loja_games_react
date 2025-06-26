import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@phosphor-icons/react'

function Navbar() {
  return (
    <div className="w-full py-7 flex justify-center bg-slate-800 text-white">
        <div className="container flex justify-between">
          <div className="flex items-center gap-2.5">
            <img src="https://ik.imagekit.io/j8alkuh75t/logo.png?updatedAt=1750945372847"
              alt="Imagem de controle de videogame" className='w-14' />
            <h2 className='text-2xl uppercase font-bold'>Loja de games</h2>
          </div>

          <div className="flex items-center gap-2.5 w-1/3">
            <input type="text" className='bg-white rounded-lg border border-gray-200 text-black p-2 w-lg' />

            <button className='rounded-lg py-2 px-3 cursor-pointer
            bg-teal-500 border border-teal-700 hover:bg-teal-600 transition delay-2'>
              <MagnifyingGlassIcon size={24} color="#ffffff" />
            </button>
          </div>

          <div className="flex items-center text-lg gap-2.5">
            Produtos
            Categorias
            Cadastrar Categoria

            <UserIcon size={36} color="#ffffff" />
            <ShoppingCartIcon size={36} color="#ffffff" />
          </div>
        </div>
      </div>
  )
}

export default Navbar