import Arrow from "../../../shared/ui/arrow"
import { NavLink } from 'react-router-dom'
import { LocalRoutes } from "../../../shared/config"

export const BackArrow = () => {
    return (
        <NavLink to={LocalRoutes.index}>
            <Arrow />
        </NavLink>
    )
}