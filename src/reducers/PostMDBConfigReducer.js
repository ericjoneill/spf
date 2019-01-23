import { POST_MDB_CONFIG } from '../actions/types';

const initialState = {
  apiKey: '1b5adf76a72a13bad99b8fc0c68cb085'
};

const PostMDBConfig = (state = initialState, action) => {
  switch (action.type) {
    case POST_MDB_CONFIG:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default PostMDBConfig;
