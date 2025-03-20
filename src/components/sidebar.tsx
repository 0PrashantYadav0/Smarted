import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/nav-group'
import { NavUser } from '@/components/nav-user'
import { sidebarData } from './data/sidebar-data'
import { useSelector } from 'react-redux'
import { TeamSwitcher } from './team-switcher'
  
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentUser = useSelector((state) => state.auth.userData);
  const user = {
    name: currentUser.Name,
    email: currentUser.Email,
    avatar: currentUser.Avatar,
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible='icon' variant='floating' {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={sidebarData.teams} />
        </SidebarHeader>
        <SidebarContent>
          {sidebarData.navGroups.map((props) => (
            <NavGroup key={props.title} {...props} />
          ))}
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  )
}
  