class User {
    #id: Number;
    #username: string;
    #email: string;
    #emailVerifiedAt: Date;
    #password: string;
    #active: boolean;
    #createdAt: Date;
    #updatedAt: Date;

    constructor() {
        this.#active = true;
        this.#createdAt = new Date();
        this.#updatedAt = new Date();
    }
}