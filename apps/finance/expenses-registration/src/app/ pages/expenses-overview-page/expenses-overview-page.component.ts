import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent, DynamicControl, DynamicFormComponent } from '@bt-libs/finance/ui/expenses-registration-forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-expenses-overview-page',
  standalone: true,
  imports: [CommonModule, AddExpenseComponent, DynamicFormComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent {
  formModelConfig: DynamicControl[] = [
    {
      controlKey: 'description', formFieldType: 'input',
      inputType: 'text', label: 'Description',
      defaultValue: '', updateOn: 'change',
      validators: [Validators.required]
    },
    {
      controlKey: 'amount', formFieldType: 'input',
      inputType: 'number', label: 'Amount excl. VAT',
      defaultValue: null, updateOn: 'change',
      validators: [Validators.required, Validators.max(100), Validators.min(0)]
    }
  ];

  addExpense(formFields: any) {
    console.log(formFields)
  }
}
