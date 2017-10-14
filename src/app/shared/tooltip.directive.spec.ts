import {TooltipDirective} from './tooltip.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

const content = 'AHHH';

@Component({
  selector: 'mock-component',
  template: `<div tooltip="${content}"></div>`
})
class MockComponent {
}

describe('A Component with TooltipDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let element: DebugElement;
  let inst: TooltipDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, TooltipDirective]
    });

    fixture = TestBed.createComponent(MockComponent);
    element = fixture.debugElement.query(By.directive(TooltipDirective));
    inst = element.injector.get(TooltipDirective);
  });

  it('should create an instance', () => {
    expect(inst).toBeTruthy();
  });

  it('should have the given text', () => {
    fixture.detectChanges();
    expect(inst.tooltipElement.innerHTML).toBe(content);
  });

  it('should be gone by default', () => {
    fixture.detectChanges();
    expect(element.nativeElement.parentElement.childNodes.length).toBe(1);
  });

  it('should show on mouseenter', () => {
    fixture.detectChanges();
    element.triggerEventHandler('mouseenter', undefined);
    fixture.detectChanges();
    expect(element.nativeElement.parentElement.childNodes.length).toBe(2);
  });

  it('should log on mouseenter', () => {
    fixture.detectChanges();
    spyOn(console, 'log');
    element.triggerEventHandler('mouseenter', undefined);
    expect(console.log).toHaveBeenCalledWith('entering', content);
  });
});
