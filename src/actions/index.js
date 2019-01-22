export const notifyTurnActive = id => ({
  type: "NOTIFY_TURN_ACTIVE",
  id
});

export const completeTurn = id => ({
  type: "COMPLETE_TURN",
  id
});

export const expireTurn = id => ({
  type: "EXPIRE_TURN",
  id
});
