
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib97-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib97Component implements OnInit {
      constructor() { }
  
      title = 'lib97-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib97Component],
      providers: [],
      exports: [Lib97Component],
  })
  export class Lib97Module { }

