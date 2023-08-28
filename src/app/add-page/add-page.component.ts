import { Component } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {
  selectedOption: string | undefined;
  inputValue: string | undefined; // Property to store the selected option
  price=""
  ingredient=""
 
  dropdownOptions: { value: string; label: string }[] = [
    { value: 'Dessert', label: 'Dessert' },
    { value: 'Vegetarian', label: 'Vegetarian' },
    { value: 'Nonveg', label: 'Non-Vegetarian' },
    // Add more options as needed
  ];

  updateInputValue() {
    // Update the inputValue based on the selected option
    const selectedOptionObject = this.dropdownOptions.find(option => option.value === this.selectedOption);
    this.inputValue = selectedOptionObject ? selectedOptionObject.label : '';
  }
add=()=>{
  let data:any={"inputValue":this.inputValue,"price":this.price,"ingredient":this.ingredient}
  console.log(data)
}

}
