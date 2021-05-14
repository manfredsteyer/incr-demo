import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/angular/generators';

export default async function (host: Tree, schema: any) {
  
  for (let i=250; i<300; i++) {
    // console.log(`ng g lib lib${i} --buildable`);
    console.log(i);
    await libraryGenerator(host, { name: 'lib' + i, buildable: true });
  }


}
