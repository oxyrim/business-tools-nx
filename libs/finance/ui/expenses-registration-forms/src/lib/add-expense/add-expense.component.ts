import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddExpense } from './add-expense.interface';

@Component({
  selector: 'bt-libs-ui-add-expense-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {

  @Input() expenseToAdd: AddExpense = {
    description: '',
    amountExclVat: null,
    vatPercentage: null,
    date: null,
  }
  
}
