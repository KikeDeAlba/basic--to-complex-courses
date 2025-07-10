# 🛠 Proyecto de Práctica: Sistema de Usuarios con TypeScript

## Objetivo
Crear un sistema completo de usuarios (CRUD) utilizando clases, herencia, interfaces y genéricos en TypeScript, aplicando los conceptos aprendidos en programación orientada a objetos.

## Requisitos del Sistema

### 1. Interfaces Base
- `IUser<TData>`: Interface genérica para usuarios con propiedades básicas
- `IUserRepository<TUser>`: Interface para operaciones CRUD de usuarios
- `IUseCase<TInput, TOutput>`: Interface para casos de uso

### 2. Clases de Usuario
- `BaseUser`: Clase base con funcionalidad común
- `StandardUser`: Usuario estándar que hereda de BaseUser
- `AdminUser`: Usuario administrador con permisos especiales
- `PremiumUser`: Usuario premium con características adicionales

### 3. Sistema de Gestión
- `UserRepository`: Clase para almacenar y gestionar usuarios
- `UserService`: Servicio para operaciones de usuario
- Casos de uso específicos (CreateUser, UpdateUser, DeleteUser)

### 4. Características Especiales
- Manejo de diferentes tipos de datos por usuario
- Logging de operaciones

## Instrucciones

### Paso 1: Definir las Interfaces
```typescript
// Define las interfaces necesarias aquí
```

### Paso 2: Crear las Clases Base
```typescript
// Implementa las clases base aquí
```

### Paso 3: Implementar Herencia
```typescript
// Crea las clases derivadas aquí
```

### Paso 4: Sistema de Repositorio
```typescript
// Implementa el sistema de almacenamiento aquí
```

### Paso 5: Casos de Uso
```typescript
// Implementa los casos de uso aquí
```

### Paso 6: Pruebas
```typescript
// Crea instancias y prueba el sistema aquí
```

## Funcionalidades Requeridas

1. **Crear usuarios** de diferentes tipos (estándar, admin, premium)
2. **Almacenar usuarios** en un repositorio en memoria
3. **Buscar usuarios** por ID, email o nombre
4. **Actualizar información** de usuarios
5. **Eliminar usuarios** con validación de permisos
6. **Listar usuarios** con filtros opcionales

## Bonus Points

- Agregar sistema de roles y permisos
- Incluir validaciónes
- Implementar búsqueda avanzada con filtros
- Agregar sistema de logging

¡Comienza implementando las interfaces y ve construyendo paso a paso!