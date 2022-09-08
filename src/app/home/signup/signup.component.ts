import { PlatformDetectorService } from "./../../core/auth/platform-detector/platform-detector.service";
import { Router } from "@angular/router";
import { NewUser } from "./new-user";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { SignUpService } from "./signup.service";
import { userNamePassword } from "./username-password.validator";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [UserNotTakenValidatorService],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild("emailInput") emailInput: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        fullName: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40),
          ],
        ],
        userName: [
          "",
          [
            Validators.required,
            lowerCaseValidator,
            Validators.minLength(2),
            Validators.maxLength(30),
          ],
          this.userNotTakenValidatorService.checkUserNameTaken(),
        ],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(14),
          ],
        ],
      },
      {
        //Criando um  crossfield validator, que vai verificar se a senha é igual ao usuário e se for igual, mostrar uma mensagem
        validator: userNamePassword,
      }
    );

    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService.signup(newUser).subscribe(
        () => this.router.navigate([""]),
        (error) => console.log(error)
      );
    }
  }
}
