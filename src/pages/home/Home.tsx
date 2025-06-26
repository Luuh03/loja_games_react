

function Home() {
  return (
    <div className="flex justify-center bg-slate-800">
      <div className="container grid grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-6 text-white">
          <h1 className="text-5xl font-bold">Seja bem vinde!</h1>
          <p className="text-xl">Aqui você encontra os melhores Games!</p>

          <div className="rounded border-white border-2 py-2 px-4 cursor-pointer">
            Novo Produto
          </div>
        </div>
        <img src="https://ik.imagekit.io/j8alkuh75t/home.png?updatedAt=1750950001302" 
          className="w-2/3 m-auto" alt="Imagem principal da página home" />
      </div>
    </div>
  )
}

export default Home