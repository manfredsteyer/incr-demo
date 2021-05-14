
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib1-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib1Component implements OnInit {
      constructor() { }
  
      title = 'lib1-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib1Component],
      providers: [],
      exports: [Lib1Component],
  })
  export class Lib1Module { }

