import createAsyncThunk from '../../lib/createAsyncThunk';
import {getUserProfileAsync} from './actions';
import {getUserProfile} from '../../api/github';

export const getUSerProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile,
);
