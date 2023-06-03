import Logo from "./Logo"
import Categories from "./Categories"
import UserMenu from "./UserMenu"

const navbar = () => {
  return (
    <div className="flex w-full justify-between container max-w-7xl m-auto p-5 font-medium text-lg ">
        <Logo />
        <Categories />
        <UserMenu />
    </div>
  )
}

export default navbar