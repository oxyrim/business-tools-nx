import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from '@bt-libs/finance/ui/expenses-registration-forms';

@Component({
  selector: 'app-expenses-overview-page',
  standalone: true,
  imports: [CommonModule, AddExpenseComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent {}
