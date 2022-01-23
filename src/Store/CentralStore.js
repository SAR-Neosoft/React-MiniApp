import rootReducer from "../Reducers/RootReducer";

import { createStore } from "redux";

const finalStore=createStore(rootReducer); //here centralized store created

export default finalStore;