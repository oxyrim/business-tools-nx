import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddExpenseReactive } from './add-expense.interface';
import { MaxWordCountDirective, maxWordCountValidator } from '@bt-libs/shared/util/form-validators'

@Component({
  selector: 'bt-libs-ui-add-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaxWordCountDirective],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {

  @Input() public set expenseToAdd(value: AddExpenseReactive) {
    this.addExpenseForm.patchValue(value);
    this.addExpenseForm.controls.tags.clear();
    value?.tags?.forEach(tag => {
      this.addExpenseForm.controls.tags.push(new FormControl(tag));
    })
  }

  @Output() addExpense = new EventEmitter<AddExpenseReactive>();


  addExpenseForm = new FormGroup({
    description: new FormControl('', [Validators.required, maxWordCountValidator(3)]),
    amount: new FormGroup({
      amountExclVat: new FormControl<number | null>(null),
      vatPercentage: new FormControl<number | null>(null),
    }),
    date: new FormControl(['']),
    tags: new FormArray([ new FormControl('') ])
  });

  addTag():void {
    this.addExpenseForm.controls.tags.insert(0, new FormControl(''));
  }

  removeTag(index: number) {
    this.addExpenseForm.controls.tags.removeAt(index)
  }

  onSubmit() {
    console.log(this.addExpenseForm.value)
    this.addExpense.emit(structuredClone(this.addExpenseForm.value as AddExpenseReactive));
    this.addExpenseForm.reset();
  }

  
}
