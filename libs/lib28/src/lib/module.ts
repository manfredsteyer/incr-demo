
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib28-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib28Component implements OnInit {
      constructor() { }
  
      title = 'lib28-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib28Component],
      providers: [],
      exports: [Lib28Component],
  })
  export class Lib28Module { }

