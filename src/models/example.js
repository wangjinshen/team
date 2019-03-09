
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload)
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      console.log(action)
      return { ...state, ...action.payload };
    },
  },

};
