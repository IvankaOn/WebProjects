<div class="container d-flex align-items-center vh-md-100">
  <button type="button" class="btn-close p-0" onclick="closeLoginContentBtn(this)"></button>
        <div class="row my-5 g-0">
            <div class="col-6 d-none d-lg-block bg-primary rounded-6">
                <div class="p-40 text-white h-100 d-flex flex-column justify-content-between">
                    <div class="d-flex align-items-end justify-content-between">
                        <a href="/" class="header-logo text-decoration-none d-block"><img src="/assets/img/print-penguin-logo-white.svg" alt="Logo"></a>
                    </div>
                    <div class="my-5">
                    <h2 class="mb-3 text-xxll">Switch Account</h2>
                        <p>Lorem ipsum dolor sit amet, consast ectetur adipiscing elit, sed do fared eiusmod tempor incididunt.</p>
                    </div>
                    <button type="button" onclick="showMultipleAccountsContent()" class="p-40 btn-link border-0 bg-white-opacity rounded-6 d-flex align-items-center justify-content-between text-white btn-animation-arrow">
                        <span>Manage My Accounts?</span>
                        <div class="btn btn-white text-primary rounded-sm-circle medium-btn-circle mt-3 mt-sm-0 d-flex justify-content-center">
                            <span class="icon-arrow-right-1 fw-bold btn-animation-arrow-right d-inline-block lh-3"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col-12 col-lg-6">
               <a href="/" class="header-logo text-decoration-none d-block d-lg-none m-auto"><img src="/assets/img/print-penguin-logo.svg" alt="Logo"></a>
               <div class="p-4 p-md-5 my-xl-5">
                    <form id="formSignUp">
                        <div class="text-center d-lg-none">
                            <h2 class="mb-3 text-xxll">Switch Account</h2>
                            <p>Lorem ipsum dolor sit amet, consast ectetur adipiscing elit, sed do fared eiusmod tempor incididunt.</p>
                        </div>
                        <form id="switchAccountForm">
                            <div id="switchAccountItems" class="switch-account scrollbar-dark">
                            <label class="switch-account-item switch-account-item-user" for="acc_uuid_1"><input class="switch-account-input-check" type="radio" name="Switch_Account_User" id="acc_uuid_1" value="acc_uuid_1" checked><div class="switch-account-name ms-3 lh-1"><h4 class="text-xs mb-1">John Smith</h4><span class="text-xs">Your account</span></div></label><label class="switch-account-item switch-account-item-user" for="acc_uuid_2"><input class="switch-account-input-check" type="radio" name="Switch_Account_User" id="acc_uuid_2" value="acc_uuid_2"><div class="switch-account-name ms-3 lh-1"><h4 class="text-xs mb-1">Jane Doe</h4><span class="text-xs">janedoe@gmail.com</span></div></label><label class="switch-account-item switch-account-item-user switch-account-item-businnes" for="acc_uuid_3"><input class="switch-account-input-check" type="radio" name="Switch_Account_User" id="acc_uuid_3" value="acc_uuid_3"><div class="switch-account-name ms-3 lh-1"><h4 class="text-xs mb-1">ABC Inc.</h4><span class="text-xs">Owned by: Peter Piper</span></div></label>
                            </div>
                            <div class="form-check d-flex justify-content-center mt-5 mb-4">
                                <input class="form-check-input" type="checkbox" id="rememberSwitchAccountOption" checked="">
                                <label class="form-check-label ms-2" for="rememberSwitchAccountOption">
                                    Remember this option for later
                                </label>
                            </div>
                            <button type="button" class="btn btn-primary w-100">Switch</button>
                        </form>
                    </form>
                    <a href="/" class="btn btn-link d-block d-lg-none text-decoration-none text-drab fw-normal my-3 m-auto">Back to main page</a>
               </div>
            </div>
        </div>
    </div>