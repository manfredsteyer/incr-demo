
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib260-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib260Component implements OnInit {
      constructor() { }
  
      title = 'lib260-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib260Component],
      providers: [],
      exports: [Lib260Component],
  })
  export class Lib260Module { }

