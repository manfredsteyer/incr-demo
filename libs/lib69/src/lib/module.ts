
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib69-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib69Component implements OnInit {
      constructor() { }
  
      title = 'lib69-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib69Component],
      providers: [],
      exports: [Lib69Component],
  })
  export class Lib69Module { }

