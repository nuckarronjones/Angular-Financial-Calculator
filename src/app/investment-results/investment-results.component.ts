import { Component, Input } from '@angular/core';
import { type IFormDetails } from '../formData.model';
import { IntestmentResultsService } from './intestment-results.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface InvestmentResult {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultsComponent {
  @Input() userInputs!: IFormDetails;

  constructor(private IntestmentResultsService: IntestmentResultsService) {}

  get getFinancialResults(): InvestmentResult[] {
    if (this.userInputs) {
      return this.IntestmentResultsService.calculateInvestmentResults(
        this.userInputs.initialInvestment,
        this.userInputs.duration,
        this.userInputs.expectedReturn,
        this.userInputs.annualInvestment
      );
    }
    // Return a structured fallback
    return [
      { year: 1, valueEndOfYear: 0, interest: 0, totalInterest: 0, totalAmountInvested: 0 }
    ]; // Adjust this fallback structure as necessary
  }
}
