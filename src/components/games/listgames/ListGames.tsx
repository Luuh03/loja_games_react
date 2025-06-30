import CardGame from "../cardgame/CardGame"


function ListGames() {
  return (
    <div className="flex justify-center w-full my-7 h-full">
      <div className="container flex flex-col">
        <div className="container mx-auto
          grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-11
        ">
          <CardGame />
        </div>
      </div>
    </div>
  )
}

export default ListGames