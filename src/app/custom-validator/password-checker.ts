import { FormGroup } from "@angular/forms";

export function passwordChecker(
    controlName:String,
    compareControlName:String
){
    return ( formGroup  : FormGroup)=>{
        let password = formGroup.controls['controlName'];
        let confPassword = formGroup.controls['compareControlName'];

        if(password.value != confPassword.value){
            confPassword.setErrors({mustMatch:true})
        }else{
            confPassword.setErrors(null);
        }
    };
}