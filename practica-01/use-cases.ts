import {IUseCase} from "./definitions";
import {BaseUser} from "./user-impl";
import {UserRepository} from "./user-repository-impl";

export class CreateUserUseCase implements IUseCase<BaseUser, void> {
    constructor(
        private readonly repository: UserRepository
    ) {
    }

    execute(input: BaseUser): void {
        this.repository.create(input)
    }
};

export class DeleteUserUseCase implements IUseCase<string, boolean> {
    constructor(
        private readonly repository: UserRepository
    ) {
    }

    execute(input: string): boolean {
        return this.repository.delete(input)
    }
};

export class UpdateUserUseCase implements IUseCase<{ id: string, userData: Partial<BaseUser> }, boolean> {
    constructor(
        private readonly repository: UserRepository
    ) {
    }

    execute(input: { id: string; userData: Partial<BaseUser> }): boolean {
        return this.repository.update(input.id, input.userData);
    }
};