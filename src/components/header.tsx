import { Home, TabletSmartphone, MonitorSmartphone } from 'lucide-react'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'
import { ThemeToggle } from './theme/theme-toogle'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <TabletSmartphone className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6 ">
          <NavLink to="/">
            <MonitorSmartphone className="h-4 w-4" />
            Solicitar Serviço
          </NavLink>
          <NavLink to="/status">
            <Home className="h-4 w-4" />
            Conferir Status
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2"> 
           <ThemeToggle /> 
           <AccountMenu /> 
        </div> 
      </div>
    </div>
  )
}