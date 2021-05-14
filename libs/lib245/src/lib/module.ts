
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib245-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib245Component implements OnInit {
      constructor() { }
  
      title = 'lib245-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib245Component],
      providers: [],
      exports: [Lib245Component],
  })
  export class Lib245Module { }

