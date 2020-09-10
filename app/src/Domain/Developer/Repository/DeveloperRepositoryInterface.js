import Developer from 'Domain/Developer/Model/Developer';

export default class DeveloperRepositoryInterface {
    getDeveloperById(developerId: Number): ?Developer {
    }

    save(developer: Developer): void {
    }
}