class Skill {
    #skillId: Number;
    #name: string;
    #type: SkillType;

    constructor(skillId: Number, name: string, type: SkillType) {
        this.#skillId = skillId;
        this.#name = name;
        this.#type = type;
        this._skillId = skillId;
        this._name = name;
        this._type = type;
    }

    get skillId(): Number {
        return this._skillId;
    }

    get name(): string {
        return this._name;
    }

    get type(): SkillType {
        return this._type;
    }
}