import {IUserRepository} from "./definitions";
import {BaseUser} from "./user-impl";
import {db} from "./index";

export class UserRepository implements IUserRepository<BaseUser> {
    create(user: BaseUser): void {
        if (db[user.id]) {
            throw new Error("User already exists");
        }

        db[user.id] = user
    }

    delete(id: string): boolean {
        if (!db[id]) {
            return false;
        }

        db[id] = undefined;

        return true;
    }

    findAll(): BaseUser[] {
        return Object.values(db).filter(user => user != null);
    }

    findByEmailAndRole(email: string, role: string): BaseUser | undefined {
        const users = this.findAll()
        return users.find(user => user.email === email && user.role === role);
    }

    findById(id: string): BaseUser | undefined {
        return db[id];
    }

    update(id: string, userData: Partial<BaseUser>): boolean {
        const user = db[id]

        if (!user) {
            return false
        }

        db[id] = new BaseUser({...user, ...userData})

        return true;
    }
}