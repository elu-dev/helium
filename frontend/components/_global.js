const user_token = localStorage.getItem('usrtk')

export default status = {
    user: {
        token: user_token,
        data: {}
    },
    contentType: 'feed',
    posts: [
        {
            userID: "test",
            imgURL: "http://localhost:3001/img/test.jpg",
            comment: "Moon \\o/"
        },
        {
            userID: "test",
            imgURL: "http://localhost:3001/img/test.jpg",
            comment: "Moon \\o/"
        },
        {
            userID: "test",
            imgURL: "http://localhost:3001/img/test.jpg",
            comment: "Moon \\o/"
        }
    ]
}

