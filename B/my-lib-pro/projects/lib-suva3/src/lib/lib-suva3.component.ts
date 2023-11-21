import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'lib-lib-suva3',
  template: `
    <form #nameAgeForm="ngForm" (ngSubmit)="onSubmitNameAgeForm()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" ngModel required />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" name="age" ngModel required min="1" />
      </div>
      <!-- <div class="form-group">
        <label for="age">Age</label>
        <input type="number" name="age" ngModel required min="1" />
      </div> -->

      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="!nameAgeForm.valid"
      >
        Submit
      </button>
    </form>
  `,
  styles: [],
})
export class LibSuva3Component implements OnInit {
  @ViewChild('nameAgeForm') values: NgForm | undefined;
  nameAgeForm: any;

  onSubmitNameAgeForm() {
    console.log(this.values);
  }
  ngOnInit(): void {}
}
