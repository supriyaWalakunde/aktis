import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appPageValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: PageValidatorDirective,
    multi: true
  }]
})
export class PageValidatorDirective implements Validator {
  regex = new RegExp("^[0-9]+[-(0-9), ]*$");
  
  
  validate(control: AbstractControl): { [key: string]: any } | null {
    let value = control.value;
    console.log(value);
    let valid = this.regex.test(value);
    return  valid ? null : { 'pageInvalid': true };
  }




}
