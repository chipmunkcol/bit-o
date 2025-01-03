import { create } from 'zustand'

interface AddEventStore {
  title: string | null
  setTitle: (title: string) => void
}

const useAddEventStore = create<AddEventStore>((set) => ({
  title: '',
  setTitle: (title: string) => set({ title }),
}))

export default useAddEventStore
