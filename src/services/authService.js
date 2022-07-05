import bcrypt from "bcrypt";
import {conflictError, unauthorizedError,} from "../middleware/handleErrorsMiddleware.js";
import * as authRepository from "../repositories/authRepository.js";

export async function signUp({ name, email, password }) {

    const existingUser = await authRepository.findUserByEmail(email);

    if (!existingUser) {
        throw conflictError();
    }

}

export async function signIn({ email, password }) {
    
    const user = await authRepository.findUserByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw unauthorizedError();
    }

}
