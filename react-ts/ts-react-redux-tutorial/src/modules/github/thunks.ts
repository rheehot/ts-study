import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";

export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile
);
