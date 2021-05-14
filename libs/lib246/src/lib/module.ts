
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib246-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib246Component implements OnInit {
      constructor() { }
  
      title = 'lib246-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib246Component],
      providers: [],
      exports: [Lib246Component],
  })
  export class Lib246Module { }

