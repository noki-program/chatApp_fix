type signedInUser = {
    email: string;
    uid: string;
};

type RootStackParamList = {
    Chat: { user: signedInUser };
    SignIn: undefined;
    SignUp: undefined;
};

type Message = {
    text: string;
    createdAt: firebase.firestore.Timestamp;
    userId: string;
};