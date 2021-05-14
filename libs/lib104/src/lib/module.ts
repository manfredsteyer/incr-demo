
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib104-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib104Component implements OnInit {
      constructor() { }
  
      title = 'lib104-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib104Component],
      providers: [],
      exports: [Lib104Component],
  })
  export class Lib104Module { }

