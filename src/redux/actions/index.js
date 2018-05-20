export const ADD = "ADD"
export const REMOVE = "REMOVE"
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function addValue(value){
	return {
		type: ADD,
		value
	}
}

export function RemoveValue(value){
	return {
		type: REMOVE,
		value
	}
}

export function fetchPostsData(data){
	return {
		type: RECEIVE_POSTS,
		data: data
	}
}