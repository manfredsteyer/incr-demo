import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {


  for (let i=0; i<300; i++) {
    console.log('augment lib #' + i);

    addModule(i, host);

  }

}
function addModule(i: number, host: Tree) {
  const fileName = `libs/lib${i}/src/lib/module.ts`;
  const content = `test`;

  host.write(fileName, content);
}

