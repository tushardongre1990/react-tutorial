import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
    // 3. Get data into component
    const menu = useLoaderData()
    // console.log(menu)
    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    )
}

// 1. Define loader
export async function loader() {
    const menu = await getMenu()
    return menu
}
export default Menu

// 2. connect loader to route
//
// {
//   path: "/menu",
//   element: <Menu />,
//   loader: menuLoader, → connect loader to route
// },
