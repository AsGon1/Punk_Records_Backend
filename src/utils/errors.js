
// Errores de usuario

class UserNicknameNotProvided extends Error {
    constructor(){
        super("User nickname not provided");
        this.statusCode = 400;
    }
}

class UserEmailNotProvided extends Error {
    constructor(){
        super("User email not provided");
        this.statusCode = 400;
    }
}

class UserPasswordNotProvided extends Error {
    constructor(){
        super("User password not provided");
        this.statusCode = 400;
    }
}

class UserEmailAlreadyExists extends Error{
    constructor(){
        super("User email already exists");
        this.statusCode = 400;
    }
}

class UserInvalidCredentials extends Error {
    constructor(){
        super("Invalid credentials");
        this.statusCode = 401;
    }
}

// ERRORES DE LAS REVIEWS

class RatingNotProvided extends Error {
    constructor(){
        super("Rating not provided");
        this.statusCode = 400;
    }
}

class ReviewNotProvided extends Error {
    constructor(){
        super("Review not provided");
        this.statusCode = 400;
    }
}

export {
    UserNicknameNotProvided,
    UserEmailNotProvided,
    UserPasswordNotProvided,
    UserEmailAlreadyExists,
    UserInvalidCredentials,
    RatingNotProvided,
    ReviewNotProvided
}