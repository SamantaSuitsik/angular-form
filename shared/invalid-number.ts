import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function invalidNumberValidator(stepsAfterComma: Number): ValidatorFn {
    
    return (control: AbstractControl) : ValidationErrors | null => {

        const input = control.value;
        
        if (input == null) {
            return { "emptyField": true };
        }
        
        if (Number.isInteger(input) && input >= 0) {
            return null;
        }

        const regexAsString = "^[0-9]+\\.[0-9]{" + stepsAfterComma.toString() + "}$"
        console.log(regexAsString)
        const regex = new RegExp(regexAsString)
        const patternMatches = regex.test(input);
        
        if (patternMatches) {
            console.log("sobib" + input)
        }
        else {
            console.log("ei sobi " + input)
        }
        // if input is invalid, it gives back info about whats wrong
        return !patternMatches ? { "invalidNumber": true} : null;

    }
}