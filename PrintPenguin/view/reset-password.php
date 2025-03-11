<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrintPenguin</title>

    <!-- Bootstrap Grid -->
    <link rel="stylesheet" href="/assets/css/bootstrap.css">
    <!-- Style -->
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="vh-sm-100 overflow-xl-hidden">
    <div class="d-flex flex-column justify-content-center h-100 bg-primary">
        <div class="forgot-password-content">
            <div class="d-flex flex-column justify-content-center h-100">
                <div class="row justify-content-center w-100 g-0">
                    <div class="col-11 col-sm-10 col-md-8 col-lg-6 col-xxl-5">
                        <a href="/" class="logo-w-20 text-decoration-none d-block m-auto mb-4"><img src="/assets/img/print-penguin-logo-white.svg" alt="Logo"></a>
                        <form id="newPasswordForm" class="text-white needs-validation" novalidate>
                            <div class="text-center mb-4">
                                <h2>Reset Password</h2>
                                <p>Create your free account and start printing with us.</p>
                            </div>
                            <div class="form-control-max-w">
                                <label for="userNewPassword" class="form-label text-white">New Password</label>
                                <input type="password" class="form-control text-xxs mb-4" name="Password" id="userNewPassword" placeholder="●●●●●●●●" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect password
                                </div>
                            </div>
                            <div class="has-validation form-control-max-w">
                                <label for="userNewPasswordRepeat" class="form-label text-white">Repeat Password</label>
                                <input type="password" class="form-control text-xxs" name="Password" id="userNewPasswordRepeat" placeholder="●●●●●●●●" required>
                                <div class="invalid-feedback text-xxs">
                                    Incorrect password
                                </div>
                            </div>
        
                            <div class="text-center my-5 mb-lg-0"> 
                                <button type="submit" class="btn btn-white px-50" onclick="sendNewPassword(this)" data-bs-dismiss="modal">Set A new password</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="/assets/js/bootstrap.min.js"></script>
<script src="/assets/js/main.js"></script>
</body>
</html>
