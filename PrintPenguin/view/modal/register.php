<div class="container d-flex align-items-center vh-md-100">
  <button type="button" class="btn-close p-0" onclick="closeLoginContentBtn(this)"></button>
        <div class="row align-items-center my-5 g-0">
            <div class="col-5 d-none d-lg-block bg-primary rounded-6">
                <div class="p-40 text-white h-100 d-flex flex-column justify-content-between">
                    <div class="d-flex align-items-end justify-content-between">
                        <a href="/" class="header-logo text-decoration-none d-block"><img src="/assets/img/print-penguin-logo-white.svg" alt="Logo"></a>
                    </div>
                    <div class="my-5">
                    <h2 class="mb-3 text-xxll">Sign Up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button type="button" onclick="showMultipleAccountsContent()" class="p-40 btn-link border-0 bg-white-opacity rounded-6 d-flex align-items-center justify-content-between text-white btn-animation-arrow">
                        <span>Have Account?</span>
                        <div class="btn btn-white text-primary rounded-sm-circle medium-btn-circle mt-3 mt-sm-0 d-flex justify-content-center">
                            <span class="icon-arrow-right-1 fw-bold btn-animation-arrow-right d-inline-block lh-3"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col-12 col-lg-7">
               <a href="/" class="header-logo text-decoration-none d-block d-lg-none m-auto"><img src="/assets/img/print-penguin-logo.svg" alt="Logo"></a>
               <div class="p-4 p-md-5">
                    <form id="formSignUp" class="needs-validation" novalidate>
                        <div class="text-center d-lg-none">
                            <h2 class="mb-3 text-xxll">Sign Up</h2>
                            <p>Create your free account and start printing with us. Don’t have an accont? <a class="text-primary fw-normal" href="javascript:void(0)" onclick="showLoginContent()">Sign In</a></p>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 mb-4">
                                <label for="formSignUpName" class="form-label">Your Name</label>
                                <input type="text" class="form-control text-xxs" name="Your_Name" id="formSignUpName" placeholder="John" required>
                            </div>
                            <div class="col-12 col-sm-6 mb-4">
                                <label for="formSignUpSurame" class="form-label">Your Surname</label>
                                <input type="text" class="form-control text-xxs" name="Surname" id="formSignUpSurame" placeholder="Smith" required>
                            </div>
                            <div class="col-12 mb-4 has-validation">
                                <label for="formSignUpMail" class="form-label">E-Mail</label>
                                <input type="email" class="form-control text-xxs" name="E-Mail_Address" id="formSignUpMail" placeholder="johnsmith@gmail.com" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect email
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 mb-4 has-validation">
                                <label for="formSignUpPassword" class="form-label">Password</label>
                                <input type="password" class="form-control text-xxs" name="Password" id="formSignUpPassword" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect password
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 mb-4 has-validation">
                                <label for="formSignUpRepeatPassword" class="form-label">Repeat Password</label>
                                <input type="password" class="form-control text-xxs" name="Repeat_Password" id="formSignUpRepeatPassword" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect password
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Create Account via e-mail</button>
                    </form>
                    <a href="/" class="btn btn-link d-block d-lg-none text-decoration-none text-drab fw-normal my-3 m-auto">Back to main page</a>
               </div>
            </div>
        </div>
    </div>