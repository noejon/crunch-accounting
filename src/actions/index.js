import actionTypes from "./actionTypes";

export const populateCard = contactChange => ({
  type: actionTypes.POPULATE_CONTACT_CARD,
  contactChange
});

export const resetCard = () => ({
  type: actionTypes.RESET_CONTACT_CARD
});

export const showModal = () => ({
  type: actionTypes.SHOW_MODAL
});

export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL
});
