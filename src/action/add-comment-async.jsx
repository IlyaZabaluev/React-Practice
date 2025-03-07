import { addComment } from './add-comment';
import { request } from '../utils/request';

export const addCommentAsync = (postId, content) => (dispatch) => {
	request(`/posts/${postId}/comments`, 'POST', { content }).then((comment) => {
		dispatch(addComment(comment.data));
	});
};
