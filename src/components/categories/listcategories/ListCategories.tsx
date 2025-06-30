import CardCategory from "../cardcategory/CardCategory"

function ListCategories() {
  return (
    <div className="flex justify-center w-full my-7 h-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardCategory />
        </div>
      </div>
    </div>
  )
}

export default ListCategories