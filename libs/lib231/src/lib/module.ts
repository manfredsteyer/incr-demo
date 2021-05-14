
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib231-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib231Component implements OnInit {
      constructor() { }
  
      title = 'lib231-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib231Component],
      providers: [],
      exports: [Lib231Component],
  })
  export class Lib231Module { }

