import * as actions from './actions';
import DISHES from '../data/make';

export const addComment = (dishId, rating, author, comment) => ({
    type: actions.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const loadDishes = dishes => ({
    type: actions.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actions.DISHES_LOADING
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());

    setTimeout(() => {
        dispatch(loadDishes(DISHES))
    },
        2000);
}
