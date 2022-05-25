// import axios from 'axios';
// import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
// import api from '../../service';

// function* fetchUsersSaga(action: any):any {
//     // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
//     // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
//     const users : any = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
//     // Instructing middleware to dispatch corresponding action.
//     yield put({
//       type: 'FETCH_USERS_SUCCESS',
//       users
//     });
//   }


//   export default function* userSendAll() {
//     yield takeLatest(REQUEST_API_DATA, getApiData)
//   }
  

//   export {
//       fetchUsersSaga
//   }