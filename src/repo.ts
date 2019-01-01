export default class GitHubRepo {
    owner: string
    name: string
    constructor({ owner, name }: Partial<Pick<GitHubRepo, 'owner' | 'name'>> = {}) {
        this.owner = owner || '';
        this.name = name || '';
    }
    get fullName(): string {
        const { owner, name } = this;
        if (!name) {
            return '';
        }
        return owner ? `${owner}/${name}` : name;
    }
}