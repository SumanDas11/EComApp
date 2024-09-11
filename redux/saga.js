import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { postDataRequest, postDataSuccess, postDataFailure } from '././UserReducer';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

function* postDataSaga(action) {
    // const navigation = useNavigation();
    try {
        const response = yield call(axios.post, 'http://localhost:8000/login', action.payload);
        yield put(postDataSuccess(response.data));
        console.log("response.status", response.status);
    } catch (error) {
        yield put(postDataFailure(error.message));
    }
}

function* watchPostData() {
    yield takeLatest(postDataRequest.type, postDataSaga);
}

export default watchPostData;
