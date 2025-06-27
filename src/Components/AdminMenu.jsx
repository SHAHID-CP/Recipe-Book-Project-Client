import { FaUserCog } from 'react-icons/fa'

import { BsGraphUp } from 'react-icons/bs'
import MenuItem from './MenuItem'
import { IoBagAdd } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label='Statistics' address='/dashboard' />
      <MenuItem icon={IoBagAdd} label='Add Item' address='/dashboard/addrecipe' />
      <MenuItem icon={AiFillProduct} label='All Item' address='/dashboard/allrecipes' />
      <MenuItem icon={BsFillMenuButtonFill} label='My Item' address='/dashboard/myrecipes' />
    </>
  )
}

export default AdminMenu