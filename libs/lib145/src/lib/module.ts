
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib145-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib145Component implements OnInit {
      constructor() { }
  
      title = 'lib145-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib145Component],
      providers: [],
      exports: [Lib145Component],
  })
  export class Lib145Module { }

