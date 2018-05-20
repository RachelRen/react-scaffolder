import { put, takeEvery, delay,call, fork, take } from 'redux-saga/effects'
import 'whatwg-fetch'

import * as actions from '../actions'



export function fetchPostsApi(reddit = "reactjs") {
  return fetch(`http://localhost:3002/user`)
    .then(response => response.json())
    .then(json => json)
}

export function* fetchPosts(reddit) {
  //yield put(actions.requestPosts(reddit))
  const posts = yield call(fetchPostsApi, reddit)
  yield put(actions.fetchPostsData(posts))
  
  //yield put(actions.receivePosts(reddit, posts))
}

export function fetchList(reddit = "reactjs") {
  return fetch(`http://localhost:3002/list`)
    .then(response => response.json())
    .then(json => json.data)
}

export function* invalidateCounter(){
    while(true){
        yield take(actions.ADD)
        yield call(fetchPosts)
    }
}

export function* startup() {
  console.log("startup start")
  //const selectedReddit = yield select(selectedRedditSelector)
  yield fork(fetchPosts)
}
export default function* rootSaga() {
  yield fork(startup)
  yield fork(invalidateCounter)
}
