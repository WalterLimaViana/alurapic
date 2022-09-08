import { PlatformDetectorService } from "./../../core/auth/platform-detector/platform-detector.service";
import { AuthService } from "../../core/auth/auth.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "./signin.component.html",
})
export class SignInComponent implements OnInit {
  fromUrl: string;
  loginForm: FormGroup;
  //Usando o focus para que caso tenha um erro no suario ou na senha, ele volte já no input do username
  @ViewChild("userNameInput")
  userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.fromUrl = params["fromUrl"])
    );
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get("userName").value;
    const password = this.loginForm.get("password").value;

    if (this.loginForm.valid) {
      this.authService.authenticate(userName, password).subscribe(
        () =>
          this.fromUrl
            ? this.router.navigateByUrl(this.fromUrl)
            : this.router.navigate(["user/", userName]),

        (err) => {
          console.log(err);
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
          alert("Invalid username or password!");
        }
      );
    }
  }
}
