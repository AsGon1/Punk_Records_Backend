import User from "../../models/user.js";
import { hash, compare } from "../../utils/bcrypt.js";
import {
    UserNicknameNotProvided,
    UserEmailNotProvided,
    UserPasswordNotProvided,
    UserEmailAlreadyExists,
    UserInvalidCredentials
} from "../../utils/errors.js";

async function register(userData) {
    
    if (!userData.nicknname) throw new UserNicknameNotProvided();
    if (!userData.email) throw new UserEmailNotProvided();
    if (!userData.password) throw new UserPasswordNotProvided();

    const oldUser = await User.findOne({ where: { email: userData.email } });

    if (oldUser) {
        throw new UserEmailAlreadyExists();
    }

    userData.password = await hash(userData.password);

    const result = await User.create(userData);

    return result;
}

async function login(email, password) {
    
    if (!email) throw new UserEmailNotProvided();
    if (!password) throw new UserPasswordNotProvided();

    const user = await User.findOne({ where: { email } });

    if (!user) throw new UserInvalidCredentials();

    const isSamePassword = await compare(password, user.password);

    if (!isSamePassword) throw new UserInvalidCredentials();

    return user;
}

function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}

export default {
    register,
    login,
    logout
};