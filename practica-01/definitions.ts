// 🛠 Proyecto de Práctica: Sistema de Usuarios con TypeScript

// ========================================
// PASO 1: DEFINIR LAS INTERFACES
// ========================================

// Interface genérica para usuarios del sistema
export interface ISystemUser<TData> {
    id: string;
    type: 'premium' | 'base' | 'standard' | 'admin';
    name: string;
    email: `${string}@${string}`;
    age: number;
    data: TData;
    role: string;
    isActive: boolean;
    createdAt: Date;

    // Métodos
    getInfo(): string;

    deactivate(): void;
}

// Interface para repositorio de usuarios
export interface IUserRepository<TUser> {
    create(user: TUser): void;

    findById(id: string): TUser | undefined;

    update(id: string, userData: Partial<TUser>): boolean;

    delete(id: string): boolean;

    findAll(): TUser[];

    findByEmailAndRole(email: string, role: string): TUser | undefined;
}

// Interface para casos de uso
export interface IUseCase<TInput, TOutput> {
    execute(input: TInput): TOutput;
}