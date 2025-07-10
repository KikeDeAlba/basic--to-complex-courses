import {BaseUser, PremiumUser} from "./user-impl";
import {UserRepository} from "./user-repository-impl";
import {CreateUserUseCase, UpdateUserUseCase} from "./use-cases";

export const db: Record<string, BaseUser | undefined> = {};

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository)
const updateUserUseCase = new UpdateUserUseCase(userRepository)

const user = new PremiumUser({id: 'esto es un id', name: 'Pedro', age: 80})

createUserUseCase.execute(user);
updateUserUseCase.execute({
    id: user.id,
    userData: {
        age: 20
    }
});

console.log(db)