import NodeGit from 'nodegit'; // eslint-disable-line import/no-unresolved
import path from 'path';
import { todo } from '../../utils';
import LFS from '../../../build/src';
import version from '../../../build/src/commands/version';

describe('Version', () => {
  it('does provide version number', () => {
    const workdirPath = path.resolve(__dirname, '..', '..', 'repos', 'lfs-test-repository');
    const NodeGitLFS = LFS(NodeGit);

    return NodeGitLFS.Repository.open(workdirPath)
      .then((repo) => version(repo))
      .then(() => todo());
  });
});
