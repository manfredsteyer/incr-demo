import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { applicationGenerator } from '@nrwl/angular/generators';

export default async function (host: Tree, schema: any) {
  
  for (let i=0; i<30; i++) {
    console.log(i);
    await applicationGenerator(host, { name: 'mfe' + i });
  }
 
}
