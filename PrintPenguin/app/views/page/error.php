<?php $error = [
    "heading" => "Oops!",
    "title" => "Why are we here?",
    "message" =>
        "There was an error processing your request. Please go back and try again.",
];
if (isset($error_code)) {
    switch ((string) $error_code) {
        case "404":
            $error["title"] = "Not Found";
            $error["message"] =
                "The page you are looking for cannot be found. Please check the address and try again.";
            break;
        case "400":
            $error["title"] = "Bad Request";
            $error["message"] =
                "Your request cannot be processed. Please go back and try again.";
            break;
        case "401":
            $error["title"] = "Unauthorized";
            $error["message"] =
                "You need to login to have access to this page.";
            break;
        case "403":
            $error["title"] = "Forbidden";
            $error["message"] =
                "You do not have permission to access this page.";
            break;
        case "500":
            $error["title"] = "Internal Error";
            $error["message"] =
                "There was an error with our website. Please try refreshing the page. Please contact us for assistance if the error persists.";
            break;
    }
} ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/theme/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/theme/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/theme/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/theme/favicon-96x96.png">

    <link rel="icon" type="image/png" sizes="36x36" href="/assets/theme/android-icon-36x36.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/theme/android-icon-48x48.png">
    <link rel="icon" type="image/png" sizes="72x72" href="/assets/theme/android-icon-72x72.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/theme/android-icon-96x96.png">
    <link rel="icon" type="image/png" sizes="144x144" href="/assets/theme/android-icon-144x144.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/theme/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="256x256" href="/assets/theme/android-icon-256x256.png">
    <link rel="icon" type="image/png" sizes="384x384" href="/assets/theme/android-icon-384x384.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/theme/android-icon-512x512.png">

    <link rel="apple-touch-icon" sizes="57x57" href="/assets/theme/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/theme/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/theme/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/theme/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/theme/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/theme/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/theme/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/theme/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/theme/apple-icon-180x180.png">

    <link rel="manifest" href="/assets/theme/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/theme/ms-icon-144x144.png">
    <meta name="msapplication-config" content="/assets/theme/browserconfig.xml" />
    <meta name="theme-color" content="#009fe3">

    <title>PrintPenguin</title>
    <!-- Style -->
    <link rel="stylesheet" href="/assets/css/bootstrap.css">
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="error-page-body bg-sky-blue">
   <div class="py-50">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-xl-8 text-center text-md-start z-index-plus-1">
                    <h1 class="text-dark mb-1 ms-neg-5">Oops!</h1>
                    <h2 class="text-sky-azure text-xl fw-normal">Where are we?</h2>
                    <p class="w-md-75 pe-md-5">The page you are looking for was moved, removed, renamed or might never existed.</p>
                    <a href="/" class="btn btn-sky-azure text-white">Go Home</a>
                </div>
            </div>
        </div>
        <div class="error-img m-auto"></div>
    </div>
</body>
</html>