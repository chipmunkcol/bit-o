import { create } from 'zustand'

interface AddEventStore {
  title: string | null
  note: string | null
  setTitle: (title: string) => void
  setNote: (note: string) => void
}

const useAddEventStore = create<AddEventStore>((set) => ({
  title: null,
  note: null,
  setTitle: (title: string) => set({ title }),
  setNote: (note: string) => set({ note }),
}))

export default useAddEventStore
