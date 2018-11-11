let id = 0;
export const addReservation = (name, people, phone) => ({
  type: "ADD_RESERVATION",
  name,
  people,
  phone,
  id: id++
});

export const cancelReservation = id => ({
  type: "CANCEL_RESERVATION",
  id
});

export const completeReservation = id => ({
  type: "COMPLETE_RESERVATION",
  id
});
