import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
  for (let i=0; i<300; i++) {
    console.log('generating lib #' + i);
    await libraryGenerator(host, { name: 'lib' + i, buildable: true });
  }

  await formatFiles(host);

}
