import { Component, EventEmitter, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IFormDetails } from '../formData.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
@Output() submitUserData = new EventEmitter<IFormDetails>();

initialInvestment = ''
annualInvestment  = ''
expectedReturn    = ''
duration          = ''

submitUserInputs(event: Event){
  event.preventDefault(); // Prevent default form submission behavior

  this.submitUserData.emit({
    initialInvestment: parseFloat(this.initialInvestment) ,
    annualInvestment: parseFloat(this.annualInvestment)   ,
    expectedReturn: parseFloat(this.expectedReturn)       ,  
    duration: parseFloat(this.duration)       
  })
}

}
