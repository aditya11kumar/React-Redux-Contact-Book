const initialState = [
  {
    id: 0,
    name: "my blog",
    email: "food",
    phone:
      "Food is very important for our health. · We need food to survive and stay fit",
  },
  {
    id: 1,
    name: "myblog",
    email: "consistency",
    phone:
      "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success",
  },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact,
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact,
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
