
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib118-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib118Component implements OnInit {
      constructor() { }
  
      title = 'lib118-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib118Component],
      providers: [],
      exports: [Lib118Component],
  })
  export class Lib118Module { }

