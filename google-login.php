<?php
session_start();

$clientId = getenv("GOOGLE_CLIENT_ID");
$redirectUri = getenv("GOOGLE_REDIRECT_URI") ?: "http://localhost/Project%20Ngoding/google-callback.php";
$next = $_GET["next"] ?? "perpus.html";
if (!in_array($next, ["perpus.html", "admin.php", "user.php"], true)) $next = "perpus.html";

if (!$clientId) {
    exit("Login Google belum dikonfigurasi. Isi GOOGLE_CLIENT_ID dan GOOGLE_REDIRECT_URI di environment server.");
}

$_SESSION["oauth_state"] = bin2hex(random_bytes(16));
$_SESSION["oauth_next"] = $next;
$params = http_build_query([
    "client_id" => $clientId,
    "redirect_uri" => $redirectUri,
    "response_type" => "code",
    "scope" => "openid email profile",
    "state" => $_SESSION["oauth_state"],
    "access_type" => "online",
    "prompt" => "select_account"
]);
header("Location: https://accounts.google.com/o/oauth2/v2/auth?" . $params);
exit;
