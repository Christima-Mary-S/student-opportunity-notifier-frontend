const initialState = {
    articles: [
        { "field1": "Random data on frontend", "hours": 1, "minutes": 1, "seconds": 1 },
        { "field1": "loading2" }
    ]
}

const reducer = (state = initialState, action) => {// state consists of posts here 
    switch (action.type) {
        case GET_LATEST_ARTICLES:
        default: return state;
    }
}

export default reducer;
