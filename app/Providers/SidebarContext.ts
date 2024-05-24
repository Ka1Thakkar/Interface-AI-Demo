import { create } from 'zustand'

interface SidebarState {
    isOpen: boolean;
    toggleOpen: () => void;
  }

export const useSidebar = create<SidebarState>((set) => ({
  isOpen : false,
  toggleOpen : () => set((state) => ({isOpen : !state.isOpen}))
}))