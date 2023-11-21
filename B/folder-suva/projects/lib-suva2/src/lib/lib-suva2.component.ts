import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'lib-lib-suva2',
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

      <div class="form-group">
        <label for="contact">Contact-No:</label>
        <input
          type="number"
          name="contact"
          ngModel
          required
          min="10"
          max="10"
        />
      </div>

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
export class LibSuva2Component {
  @ViewChild('nameAgeForm') values: NgForm | undefined;

  onSubmitNameAgeForm() {
    console.log(this.values);
  }
}
