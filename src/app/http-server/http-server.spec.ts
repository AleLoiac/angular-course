import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServer } from './http-server';

describe('HttpServer', () => {
  let component: HttpServer;
  let fixture: ComponentFixture<HttpServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpServer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
