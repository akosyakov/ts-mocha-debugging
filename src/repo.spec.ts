import * as assert from 'assert';
import GitHubRepo from './repo';

describe('Repo', () => {

    it('fullName should be empty #1', () => {
        assert.equal('', new GitHubRepo().fullName);
    });

    it('fullName should be empty #2', () => {
        assert.equal('', new GitHubRepo({
            owner: 'theia-ide'
        }).fullName);
    });

    it('fullName should be theia-ide/theia', () => {
        assert.equal('theia-ide/theia', new GitHubRepo({
            owner: 'theia-ide',
            name: 'theia'
        }).fullName);
    });

    it('fullName should be theia', () => {
        const repo = new GitHubRepo({ name: 'theia' });
        assert.equal('vscode', repo.fullName);
    });

});