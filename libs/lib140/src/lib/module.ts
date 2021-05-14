
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib140-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib140Component implements OnInit {
      constructor() { }
  
      title = 'lib140-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib140Component],
      providers: [],
      exports: [Lib140Component],
  })
  export class Lib140Module { }

