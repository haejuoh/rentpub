const initialState = {
    showSnackbar: false,
    snackData: {},
    notifications: []
  };
  
  export default function Reducers(state = initialState, action) {
    switch (action.type) {
      case "SHOW_SNACKBAR":
        return {
          ...state,
          showSnackbar: true,
          snackData: action.payload.snackData
        };
      case "HIDE_SNACKBAR":
        return {
          ...state,
          showSnackbar: false
        };
      case "ENQUEUE_SNACKBAR":
        return {
          ...state,
          notifications: [
            ...state.notifications,
            {
              key: action.key,
              ...action.notification
            }
          ]
        };
  
      case "CLOSE_SNACKBAR":
        return {
          ...state,
          notifications: state.notifications.map((notification) =>
            action.dismissAll || notification.key === action.key
              ? { ...notification, dismissed: true }
              : { ...notification }
          )
        };
  
      case "REMOVE_SNACKBAR":
        return {
          ...state,
          notifications: state.notifications.filter(
            (notification) => notification.key !== action.key
          )
        };
      default:
        return state;
    }
  }
  