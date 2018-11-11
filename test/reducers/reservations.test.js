import reducer from "../../src/reducers/reservations";

const reservationProps = {
  name: "SomeName",
  people: 2,
  phone: "3331115552"
};

const reservationRecords = {
  cancelled: 0,
  completed: 0,
  online: 0,
  local: 0
};

const initialState = {
  active: [],
  records: { ...reservationRecords },
  id: 0
};

const reservationAddedState = {
  active: [{ ...reservationProps, id: 0 }],
  records: { ...reservationRecords, local: 1 }
};

const reservationCancelledState = {
  active: [],
  records: {
    ...reservationRecords,
    local: 1,
    cancelled: 1
  }
};

const addAction = {
  type: "ADD_RESERVATION",
  id: 0,
  ...reservationProps
};

const cancelAction = {
  type: "CANCEL_RESERVATION",
  id: 0,
  ...reservationProps
};

describe("reservations reducer", () => {
  describe("when using single actions", () => {
    it("should return the initialState", () => {
      //Update this when env is added to redux
      const target = reducer(initialState, {});
      expect(target).toEqual(initialState);
    });

    it("should handle ADD_RESERVATION", () => {
      const target = reducer(initialState, addAction);
      expect(target).toEqual(reservationAddedState);
    });

    it("should handle CANCEL_RESERVATION", () => {
      const target = reducer(reservationAddedState, cancelAction);
      expect(target).toEqual(reservationCancelledState);
    });
  });

  describe("when cancelling a reservation", () => {
    it("should remove the target target reservation from the state", () => {
      let target = reducer(initialState, addAction);
      target = reducer(target, cancelAction);
      target = reducer(target, cancelAction);

      const expectedState = {
        active: [],
        records: {
          ...reservationRecords,
          local: 1,
          cancelled: 2
        }
      };
      expect(target).toEqual(expectedState);
    });
  });
});
