const inintialState = {
  data: [],
  editData:{}
};

const handleUsers = (state = inintialState, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return { ...state, data: [...action.payload] };

    case "USER_DELETE":
      let filterData = state.data.filter((item, i) => i !== action.payload);
      return { ...state, data: filterData };

      case "USER_EDIT":
      let findData = state.data.find((item, i) => i === action.payload);
      return { ...state, editData: findData };

    default:
      break;
  }
};

export default handleUsers;
