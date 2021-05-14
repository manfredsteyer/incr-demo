
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib2-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib2Component implements OnInit {
      constructor() { }
  
      title = 'lib2-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib2Component],
      providers: [],
      exports: [Lib2Component],
  })
  export class Lib2Module { }

