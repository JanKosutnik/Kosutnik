interface SidebarSection {
  id: string
  title: string
}

interface SidebarProps {
  sections: SidebarSection[]
  activeSection: string | null
}

// TODO: render section nav links; highlight activeSection
export default function Sidebar({ sections: _sections, activeSection: _activeSection }: SidebarProps) {
  return null
}
