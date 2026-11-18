<?php
session_start();

if (!isset($_SESSION["login"]) || $_SESSION["login"] !== true || $_SESSION["role"] !== "admin") {
    header("Location: yttta.php");
    exit;
}
?>
<!doctype html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Dashboard</title>
</head>
<body>
    <h1>Halaman Admin</h1>
    <p>Selamat datang, <?= htmlspecialchars($_SESSION["name"]) ?></p>
    <p>Email: <?= htmlspecialchars($_SESSION["email"]) ?></p>
    <a href="yttta.php?logout=1">Logout</a>
</body>
</html>