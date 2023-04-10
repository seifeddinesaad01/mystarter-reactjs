import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: [
    {
      id: "modal-example",
      open: false,
    },
  ],
};

const slice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { id, data } = action.payload;
      const index = state.modals.findIndex((modal) => modal.id === id);
      state.modals[index].open = true;
      state.modals[index].data = data;
    },
    closeModal: (state, action) => {
      const id = action.payload;
      const index = state.modals.findIndex((modal) => modal.id === id);
      state.modals[index].open = false;
    },
  },
});

export const reducer = slice.reducer;

export const openModal = (id, data) => (dispatch) => {
  dispatch(slice.actions.openModal({ id, data }));
};

export const closeModal = (id) => (dispatch) => {
  dispatch(slice.actions.closeModal(id));
};

export default slice;
