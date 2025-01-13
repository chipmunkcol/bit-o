import { ScheduleResponse } from '@/features/calendar/types'
import { addDays, isWithinInterval } from 'date-fns'
import { create } from 'zustand'

interface useScheduleStore {
  title: string | null
  note: string | null
  date: { startDateTime: Date; endDateTime: Date } | null
  selectedDate: Date | null
  plans: ScheduleResponse[]
  selectedDatePlans: ScheduleResponse[]
  currentDate: Date
  setDate: (date: { startDateTime: Date; endDateTime: Date }) => void
  setCurrentDate: (today: Date) => void
  setTitle: (title: string | null) => void
  setNote: (note: string | null) => void
  setSelectedDate: (date: Date) => void
  setSelectedDatePlans: (payload: ScheduleResponse[]) => void
  setPlans: (payload: ScheduleResponse[]) => void
}

const useScheduleStore = create<useScheduleStore>((set) => ({
  title: null,
  note: null,
  date: null,
  selectedDate: null,
  plans: [],
  selectedDatePlans: [],
  currentDate: new Date(),
  setDate: (date: { startDateTime: Date; endDateTime: Date }) => set({ date }),
  setCurrentDate: (currentDate: Date) => set({ currentDate }),
  setTitle: (title: string | null) => set({ title }),
  setNote: (note: string | null) => set({ note }),
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
  setPlans: (plans: ScheduleResponse[]) => set({ plans }),
  setSelectedDatePlans: (selectedDatePlans: ScheduleResponse[]) => set({ selectedDatePlans }),
}))

export default useScheduleStore
