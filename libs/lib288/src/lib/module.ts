
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib288-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib288Component implements OnInit {
      constructor() { }
  
      title = 'lib288-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib288Component],
      providers: [],
      exports: [Lib288Component],
  })
  export class Lib288Module { }

