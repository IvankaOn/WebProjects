<div class="container d-flex align-items-center vh-md-100">
    <button type="button" class="btn-close content-login-btn-close p-0" onclick="closeLoginContentBtn(this)"></button>
        <div class="row content-login-row align-items-center my-5 g-0">
            <div class="col-6 d-none d-lg-block bg-primary rounded-6">
                <div class="p-40 text-white h-100 d-flex flex-column justify-content-between">
                    <div class="d-flex align-items-end justify-content-between">
                        <a href="/" class="header-logo text-decoration-none d-block"><img src="/assets/img/print-penguin-logo-white.svg" alt="Logo"></a>
                    </div>
                    <div class="my-5">
                        <h2 class="mb-3">Sign In</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <button type="button"  onclick="showRegisterContent()" class="p-40 btn-link bg-white-opacity border-0 rounded-6 d-flex align-items-center justify-content-between text-white btn-animation-arrow">
                        <span>Create Account</span>
                        <div class="btn btn-white text-primary rounded-sm-circle medium-btn-circle mt-3 mt-sm-0 d-flex justify-content-center">
                            <span class="icon-arrow-right-1 fw-bold btn-animation-arrow-right d-inline-block lh-3"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col-12 col-lg-6">
               <a href="/" class="header-logo text-decoration-none d-block d-lg-none m-auto"><img src="/assets/img/print-penguin-logo.svg" alt="Logo"></a>
               <div class="p-4 p-md-5">
                    <form id="formSignIn" class="needs-validation" novalidate>
                        <div class="text-center d-lg-none">
                            <h2 class="mb-3">Sign In</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-4 has-validation">
                                <label for="formSignInMail" class="form-label">E-Mail</label>
                                <input type="email" class="form-control text-xxs" name="E-Mail_Address" id="formSignInMail" placeholder="johnsmith@gmail.com" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect email
                                </div>
                            </div>
                            <div class="col-12 mb-4 has-validation">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <label for="formSignInPassword" class="form-label mb-0">Password</label>
                                    <button type="button" class="btn btn-link text-primary fw-normal text-xxs p-0" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">Forgot Password?</button>
                                </div>

                                <input type="password" class="form-control text-xxs" name="Password" id="formSignInPassword" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect password
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mt-3">Sign In</button>
                    </form>
                    <p class="text-center my-3 my-md-4 d-lg-none">Or</p>
                    <button type="button" class="btn btn-white-with-border d-flex justify-content-center w-100 align-items-center d-lg-none mb-3 mb-xl-0" onclick="showRegisterContent()">Sign Up For A Free Account</button>
                    <a href="/" class="btn btn-link d-block d-lg-none text-decoration-none text-drab fw-normal my-3 m-auto">Back to main page</a>
               </div>
            </div>
        </div>
    </div>

    <!-- MODAL FORGOT PASSWORD -->
    <div class="modal fade overflow-xl-hidden bg-primary" id="forgotPasswordModal" aria-hidden="true" aria-labelledby="forgotPasswordModalLabel" tabindex="-1">
        <button type="button" class="btn-close p-0 bg-filter-white" data-bs-dismiss="modal"></button>
        <div class="modal-dialog modal-dialog-centered max-w-100">
            <div class="modal-content forgot-password-content p-4 rounded-0 border-0 bg-primary box-shadow-none">
                <div class="row justify-content-center g-0">
                    <div class="col-11 col-sm-10 col-md-8 col-lg-6 col-xxl-5">
                    <a href="/" class="logo-w-20 text-decoration-none d-block m-auto mb-4"><img src="../assets/img/print-penguin-logo-white.svg" alt="Logo"></a>
                        <form id="forgotPasswordForm" class="text-white needs-validation" novalidate>
                            <div class="text-center mb-5">
                                <h2 id="forgotPasswordModalLabel">Reset Password</h2>
                                <p>Create your free account and start printing with us.</p>
                            </div>
                            <div class="has-validation form-control-max-w">
                                <input type="email" class="form-control text-xxs" name="E-Mail_Address" id="forgotPasswordEmail" placeholder="sample@gmail.com" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect email
                                </div>
                            </div>
                            <div class="text-center my-5 mb-lg-0"> 
                                <button type="submit" onclick="forgotPasswordSendEmail(this)" class="btn btn-white px-50">Send E-mail</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


