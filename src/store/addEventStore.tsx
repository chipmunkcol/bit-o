import { CalendarListReponse } from '@/features/calendar/types'
import { addDays, isWithinInterval } from 'date-fns'
import { create } from 'zustand'

interface AddEventStore {
  title: string | null
  note: string | null
  selectedDate: Date | null
  plans: CalendarListReponse[]
  selectedDatePlans: CalendarListReponse[]
  setTitle: (title: string) => void
  setNote: (note: string) => void
  setSelectedDate: (date: Date) => void
  setSelectedDatePlans: (payload: CalendarListReponse[]) => void
  setPlans: (payload: CalendarListReponse[]) => void
}

const useAddEventStore = create<AddEventStore>((set) => ({
  title: null,
  note: null,
  selectedDate: null,
  plans: [],
  selectedDatePlans: [],
  setTitle: (title: string) => set({ title }),
  setNote: (note: string) => set({ note }),
  setSelectedDate: (selectedDate: Date) =>
    set((state) => {
      //선택된 날짜의 plan filter
      if (state.plans.length > 0) {
        const filteredPlans = state.plans.filter((plan) =>
          isWithinInterval(selectedDate, {
            start: addDays(plan.startDateTime, -1),
            end: plan.endDateTime,
          }),
        )
        state.selectedDatePlans = filteredPlans
      }
      return { selectedDate }
    }),
  setPlans: (plans: CalendarListReponse[]) => set({ plans }),
  setSelectedDatePlans: (selectedDatePlans: CalendarListReponse[]) => set({ selectedDatePlans }),
}))

export default useAddEventStore
