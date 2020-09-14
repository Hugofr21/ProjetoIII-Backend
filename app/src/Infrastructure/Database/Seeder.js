import SkillCreateService from "Domain/Skill/Service/SkillCreateService";
import SkillType from "../../Domain/Skill/Model/SkillType";
import UserCreateService from "../../Domain/User/Service/UserCreateService";
import LanguageCreateService from "../../Domain/Language/Service/LanguageCreateService";
import {Password} from "../../Domain/User/ValueObject/Password";

export class Seeder {

    #config;
    #database;
    #skillCreateService: SkillCreateService;
    #userCreateService: UserCreateService;
    #languageCreateService: LanguageCreateService;

    constructor({config, database, skillCreateService, userCreateService, languageCreateService}) {
        this.#config = config;
        this.#database = database;
        this.#skillCreateService = skillCreateService;
        this.#userCreateService = userCreateService;
        this.#languageCreateService = languageCreateService;
    }

    async seed() {
        if (!this.#config.FORCE_UPDATE_DB) {
            return;
        }
        await this.#database.sequelize.sync({force: this.#config.FORCE_UPDATE_DB});

        await this.createTechinalSkills();
        await this.createPersonalSkills();
        await this.createLanguages();
        await this.createAdminUser()

        console.log("Database updated!");
    }

    async createTechinalSkills() {
        await this.#skillCreateService.createSkill("Desenvolvimento web", SkillType.TECHNICAL);
        await this.#skillCreateService.createSkill("Secretaria", SkillType.TECHNICAL);
        await this.#skillCreateService.createSkill("Designer Web", SkillType.TECHNICAL);
        await this.#skillCreateService.createSkill("Designer Gráfica", SkillType.TECHNICAL);
        await this.#skillCreateService.createSkill("Base de Dados", SkillType.TECHNICAL);
        await this.#skillCreateService.createSkill("Programador", SkillType.TECHNICAL);
        await this.#skillCreateService.createSkill("Gerente", SkillType.TECHNICAL);
    }

    async createPersonalSkills() {
        await this.#skillCreateService.createSkill("Atitude", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Comunicação", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Pensamento criativo", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Trabalho em equipa", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Positividade", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Capacidade para tomar decisões", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Gestão do tempo", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Motivação", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Resolução de problemas", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Pensamento crítico", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Resolução de conflitos", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Gerente", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Capacidade de adaptação a ambiente multicultural", SkillType.PERSONAL);
        await this.#skillCreateService.createSkill("Networking", SkillType.PERSONAL);
    }

    async createAdminUser() {
        await this.#userCreateService.createUser(
            "admin",
            "Admin",
            "admin@admin.com",
            new Password("admin"),
            "123456789",
            "esposende",
            "masculino",
            20,
            "portuguesa",
            "963541834",
            "admin",
            new Date(),
            "4740-634",
            false,
            false
        );
    }

    async createLanguages() {
        await this.#languageCreateService.createLanguage("Alemão");
        await this.#languageCreateService.createLanguage("Frances");
        await this.#languageCreateService.createLanguage("Inglês");
        await this.#languageCreateService.createLanguage("Portugues");
    }
}