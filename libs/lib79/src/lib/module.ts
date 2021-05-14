
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib79-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib79Component implements OnInit {
      constructor() { }
  
      title = 'lib79-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib79Component],
      providers: [],
      exports: [Lib79Component],
  })
  export class Lib79Module { }

