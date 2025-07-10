import {ISystemUser} from "./definitions";

export type UserData = { phoneNumber: string };

export class BaseUser implements ISystemUser<UserData> {
    constructor(payload: Partial<BaseUser>) {
        Object.assign(this, payload)
        if (!payload.type) {
            this.type = 'base'
        }
    }

    age: number;
    createdAt: Date;
    data: UserData;
    email: `${string}@${string}`;
    id: string;
    isActive: boolean;
    name: string;
    role: string;
    type: "premium" | "base" | "standard" | "admin";

    deactivate(): void {
        this.isActive = false
    }

    getInfo(): string {
        return `Info: nombre es ${this.name} y la edad es ${this.age}`;
    }
}

export class StandardUser extends BaseUser {
    constructor(payload: Partial<StandardUser>) {
        payload.type = 'standard'
        super(payload);
    }
}

export class PremiumUser extends BaseUser {
    constructor(payload: Partial<PremiumUser>) {
        payload.type = 'premium'
        super(payload);
    }
}

export class AdminUser extends BaseUser {
    constructor(payload: Partial<AdminUser>) {
        payload.type = 'admin'
        super(payload);
    }
}

