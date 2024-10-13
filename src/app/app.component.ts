import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { type IFormDetails } from './formData.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  // styleUrl: '',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  
  userInputs!: IFormDetails;

  outPutUserInformation(userData: IFormDetails){
    console.log('this is the data we received ' , userData)
    this.userInputs = userData
  }

}
