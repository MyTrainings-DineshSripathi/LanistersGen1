import { NavLink, Outlet, useLocation } from 'react-router'
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInset,
} from './components/ui/sidebar'
import {
  HomeIcon,
  UsersIcon,
  GraduationCapIcon,
  LayersIcon,
  BookOpenIcon,
  LogOutIcon,
} from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', path: '/', Icon: HomeIcon },
  { label: 'Instructors', path: '/instructors', Icon: UsersIcon },
  { label: 'Students', path: '/students', Icon: GraduationCapIcon },
  { label: 'Batches', path: '/batches', Icon: LayersIcon },
  { label: 'Courses', path: '/courses', Icon: BookOpenIcon },
]

function App() {
  const location = useLocation()

  return (
    <SidebarProvider className="min-h-screen">
      <Sidebar className="border-r border-sidebar-border bg-sidebar shadow-lg shadow-sidebar/10 transition-all duration-300 ease-in-out">
        <SidebarHeader className="px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.32em] text-sidebar-primary-foreground">
                Nexus LMS
              </p>
              <p className="text-lg font-semibold text-sidebar-primary">
                Admin Panel
              </p>
            </div>
            <SidebarTrigger className="md:hidden" />
          </div>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent className="px-2 py-3">
          <SidebarMenu className="flex flex-col gap-2">
            {menuItems.map(({ label, path, Icon }) => (
              <SidebarMenuItem key={path}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === path}
                >
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className="flex items-center gap-3 w-full"
                  >
                    <Icon className="size-4" />
                    <span>{label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="px-2 pb-4 pt-4">
          <SidebarMenuButton asChild isActive={location.pathname === '/logout'}>
            <NavLink to="/logout" className="flex items-center gap-3 w-full">
              <LogOutIcon className="size-4" />
              <span>Logout</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-h-screen bg-background transition-colors duration-300">
        <div className="sticky top-0 z-20 border-b border-border/80 bg-background/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground">
                Admin Dashboard
              </p>
              <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Welcome back, admin
              </h1>
            </div>
            <SidebarTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-primary transition hover:bg-accent-foreground hover:text-sidebar-accent focus-visible:ring-2 focus-visible:ring-sidebar-ring md:h-12 md:w-12" />
          </div>
        </div>

        <section className="mx-auto w-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
