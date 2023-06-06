import Logo from "./Logo"
import Categories from "./Categories"
import UserMenu from "./UserMenu"
import { User } from "@prisma/client"

const navbar = ({user} : {user: User | any | undefined}) => {
  return (
    <div className="flex w-full justify-between container max-w-7xl m-auto p-5 font-medium text-lg ">
        <Logo />
        <Categories />
        <UserMenu user={user}/>
    </div>
  )
}

export default navbar