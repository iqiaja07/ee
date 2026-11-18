<?php
session_start();
require "db.php";

if (!hash_equals($_SESSION["oauth_state"] ?? "", $_GET["state"] ?? "")) exit("Permintaan login tidak valid.");
$code = $_GET["code"] ?? "";
$clientId = getenv("GOOGLE_CLIENT_ID");
$clientSecret = getenv("GOOGLE_CLIENT_SECRET");
$redirectUri = getenv("GOOGLE_REDIRECT_URI") ?: "http://localhost/Project%20Ngoding/google-callback.php";

if (!$code || !$clientId || !$clientSecret) exit("Konfigurasi login Google belum lengkap.");
$ch = curl_init("https://oauth2.googleapis.com/token");
curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => http_build_query(["code" => $code, "client_id" => $clientId, "client_secret" => $clientSecret, "redirect_uri" => $redirectUri, "grant_type" => "authorization_code"]), CURLOPT_RETURNTRANSFER => true]);
$tokenResponse = json_decode(curl_exec($ch), true);
curl_close($ch);
if (empty($tokenResponse["access_token"])) exit("Token Google tidak dapat diperoleh.");

$ch = curl_init("https://openidconnect.googleapis.com/v1/userinfo");
curl_setopt_array($ch, [CURLOPT_HTTPHEADER => ["Authorization: Bearer " . $tokenResponse["access_token"]], CURLOPT_RETURNTRANSFER => true]);
$profile = json_decode(curl_exec($ch), true);
curl_close($ch);
if (empty($profile["sub"]) || empty($profile["email"])) exit("Profil Google tidak lengkap.");

$stmt = $pdo->prepare("SELECT * FROM users WHERE google_id = ? OR email = ? LIMIT 1");
$stmt->execute([$profile["sub"], strtolower($profile["email"])]);
$user = $stmt->fetch();
if (!$user) {
    $stmt = $pdo->prepare("INSERT INTO users (name, email, google_id) VALUES (?, ?, ?)");
    $stmt->execute([$profile["name"] ?? $profile["email"], strtolower($profile["email"]), $profile["sub"]]);
    $user = ["id" => $pdo->lastInsertId(), "name" => $profile["name"] ?? $profile["email"], "email" => strtolower($profile["email"]), "role" => "user"];
} elseif (empty($user["google_id"])) {
    $pdo->prepare("UPDATE users SET google_id = ? WHERE id = ?")->execute([$profile["sub"], $user["id"]]);
}

session_regenerate_id(true);
$_SESSION["login"] = true;
$_SESSION["user_id"] = $user["id"];
$_SESSION["name"] = $user["name"];
$_SESSION["email"] = $user["email"];
$_SESSION["role"] = $user["role"];
$next = $_SESSION["oauth_next"] ?? "perpus.html";
unset($_SESSION["oauth_state"], $_SESSION["oauth_next"]);
header("Location: " . ($user["role"] === "admin" ? "admin.php" : $next));
exit;
