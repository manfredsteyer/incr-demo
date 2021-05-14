
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib295-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib295Component implements OnInit {
      constructor() { }
  
      title = 'lib295-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib295Component],
      providers: [],
      exports: [Lib295Component],
  })
  export class Lib295Module { }

