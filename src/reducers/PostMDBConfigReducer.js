import { POST_MDB_CONFIG } from '../actions/types';
// 86f6f20b20894b47dfe0086e8ecebe5d
// 1b5adf76a72a13bad99b8fc0c68cb085
const initialState = {
  apiKey: '86f6f20b20894b47dfe0086e8ecebe5d'
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
