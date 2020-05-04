let store = {
    _callSubscriber() {
    },
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: "Hi! How are you?", likesCount: 12},
                {id: 2, message: "It's my  first post", likesCount: 11},
                {id: 3, message: "Mother of GOD", likesCount: 44}
            ],
            newPostText: 'kseniya'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Zhenya',
                    ava: 'https://i.pinimg.com/originals/dd/e1/a2/dde1a2daf07cf9631d490fec33a1c0c4.jpg'
                },
                {id: 2, name: 'Dima', ava: 'https://cache.kwork.ru/pics/t3/85/109231-1.jpg'},
                {
                    id: 3,
                    name: 'Andrey',
                    ava: 'https://sun9-29.userapi.com/K9Z99bNoW2AChmr9LmGVGyFAim8MXjQIqb6e-g/uji6cP-Ixmg.jpg?ava=1'
                },
                {id: 4, name: 'Sasha', ava: 'https://leadmachine.ru/wp-content/uploads/2013/07/123.jpg'},
                {id: 5, name: 'Denis', ava: 'https://bbiz.club/data/avatars/l/149/149034.jpg?1542535443'}
            ],

            messages: [
                {id: 1, message: "Hi. It is me!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "What are your problem?"},
                {id: 4, message: "Yo"},
                {id: 5, message: "blablabla"}
            ]
        }

    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: 4, message: store._state.profilePage.newPostText, likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;