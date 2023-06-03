import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ModalState {
  openModal: boolean,
}

// Define the initial state using that type
const initialState: ModalState = {
  openModal: false
}

export const modelSlice = createSlice({
  name: 'modal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModalFunc: (state) => {
      state.openModal = !state.openModal
    },

  },
})

export const { openModalFunc } = modelSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default modelSlice.reducer