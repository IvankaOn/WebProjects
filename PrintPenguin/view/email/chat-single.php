<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta property="og:title" content="Print Penguin">
	<meta property="og:image" content="https://printpenguin.faster.ws/assets/img/og/affordable-printing-products.png">
	<meta property="og:image:secure_url" content="https://printpenguin.faster.ws/assets/img/og/affordable-printing-products.png">
	<meta property="og:image:type" content="image/jpeg">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="627">
	<meta property="og:image:alt" content="Print Penguin Logo">
	<meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore">
	<meta property="og:url" content="https://printpenguin.faster.ws/chat">
	<meta property="og:type" content="website">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="affordable-printing-products">
    <meta property="twitter:domain" content="printpenguin.faster.ws">
    <meta property="twitter:url" content="https://printpenguin.faster.ws/chat">
    <meta name="twitter:title" content="Print Penguin">
    <meta name="twitter:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore">
    <meta name="twitter:image" content="https://printpenguin.faster.ws/assets/img/og/affordable-printing-products.png">
    
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
    <!-- Bootstrap Grid -->
    <link rel="stylesheet" href="/assets/css/bootstrap.css">
    <!-- ICONSAX -->
    <link rel="stylesheet" href="/assets/iconsax/style.css">
    <!-- UICONS -->
    <link rel="stylesheet" href="/assets/uicons-regular-rounded/css/uicons-regular-rounded.css">
    <!-- TOM select -->
    <link rel="stylesheet" href="/assets/tom-select/tom-select.css">
    <!-- Style -->
    <link rel="stylesheet" href="/assets/css/style.css">

    <!-- STYLE CHAT PAGE -->
    <style>
        html, body{
            height: 100%;
        }
    </style>

</head>
    <body class="overflow-hidden">
        <div class="container-fluid container-chat-content px-0">
            <div class="chat-header-blue text-center">
                <a href="/" class="text-white header-logo text-decoration-none d-block m-auto py-4"><img src="/assets/img/print-penguin-logo-white.svg" alt="Logo"></a>
            </div>
            <div id="helpCenterChatPage">
                <div class="chat-body scrollbar-dark">
                    <div class="container-chat bg-easy-azure rounded-6 overflow-hidden p-4 z-index-plus-1 position-relative">
                        <h4 class="text-center text-md mb-2">Subject Line</h4>
                        <p class="text-center text-xxs fw-semibold mb-1" id="supportChatId">Chat ID: 213124143242423</p>
                        <p class="text-center text-xxs mb-0" id="supportChatActive">Active 2d ago</p>
                    </div>
                    <div class="mt-6 container-chat">
                        <div class="text-center text-drab">
                            <span class="text-xs">Start of an conversation</span>
                            <p id="startedTimeConversation" class="text-xxs">10:31 AM, 16.07.2022</p>
                        </div>
                        <div id="supportChatBody" class="mt-6"></div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer box-shadow-footer mt-auto">
                <div class="container-chat">
                    <form id="supportChatForm">
                        <div class="support-chat-send-container">
                            <textarea id="yourMessageSupportChat" class="message-input" rows="1" placeholder="Your Message"></textarea>
                            <div class="support-chat-send-btns">
                                <label class="choose-file-chat-btn" for="supportChatInputFile"><span class="js-image-src" data-image-src="/assets/img/icons/paperclip.svg"></span></label>
                                <input type="file" name="File" id="supportChatInputFile" hidden>
                                <button type="button" id="sendSupportMessageBtn" class="btn send-chat-btn"><span class="js-image-src send-icon" data-image-src="/assets/img/icons/send-icon.svg"></span></button>
                            </div>
                        </div>
                    </form>
                    <div id="filesName" class="ms-4"></div>
                </div>
            </div>
        </div>

        <!-- COOKIE BANNER -->
        <div id="cookieBanner" class="cookie-banner d-none">
            <div class="container">
                <div class="d-flex flex-column flex-sm-row align-items-center">
                    <span class="cookie-banner-icon"></span>
                    <span class="text-center text-sm-start text-xxs mb-3 mb-sm-0 me-sm-4">This website uses cookies to ensure you get the best experience on our website. By using our site you consent cookies. <span class="text-white text-decoration-underline btn btn-link p-0 text-xxs" data-bs-target="#modalCookie" data-bs-toggle="modal">Learn More</span></span>
                    <div class="ms-sm-auto">
                        <button type="button" class="btn btn-green text-white d-block white-space-nowrap" onclick="applyCookie()"><span class="fi-rr-check me-1 text-xxs"></span> Got It</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="/assets/js/classes/Log.js"></script>
         
        <script src="/app/cache/main.en.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/classes/API.js"></script>
        <script src="/assets/js/classes/Menu.js"></script>
        <script src="/assets/js/classes/Cache.js"></script>
        <script src="/assets/js/classes/Cookie.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/main-menu.js"></script>
        <script src="/assets/js/support-center.js"></script>
    
    </body>
</html>