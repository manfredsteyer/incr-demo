
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib180-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib180Component implements OnInit {
      constructor() { }
  
      title = 'lib180-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib180Component],
      providers: [],
      exports: [Lib180Component],
  })
  export class Lib180Module { }

