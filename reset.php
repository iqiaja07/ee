<?php
session_start();
require "db.php";

$token = $_GET["token"] ?? $_POST["token"] ?? "";
$error = "";
$success = "";

$stmt = $pdo->prepare("SELECT id, user_id FROM password_reset_tokens WHERE token_hash = ? AND used_at IS NULL AND expires_at > NOW() LIMIT 1");
$stmt->execute([hash("sha256", $token)]);
$reset = $stmt->fetch();

if (!$reset) {
    $error = "Tautan reset tidak valid atau sudah kedaluwarsa.";
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    $password = $_POST["password"] ?? "";
    if (strlen($password) < 8) {
        $error = "Password baru minimal 8 karakter.";
    } else {
        $pdo->beginTransaction();
        $pdo->prepare("UPDATE users SET password_hash = ? WHERE id = ?")->execute([password_hash($password, PASSWORD_DEFAULT), $reset["user_id"]]);
        $pdo->prepare("UPDATE password_reset_tokens SET used_at = NOW() WHERE id = ?")->execute([$reset["id"]]);
        $pdo->commit();
        $success = "Password berhasil diubah. Silakan masuk kembali.";
    }
}
?>
<!doctype html>
<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Reset Sandi | IQORGMslim</title><style>
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 75% 20%,#c9a86a33,transparent 35%),#07080c;color:#f5f2ea;font-family:Arial,sans-serif}.box{width:min(440px,100%);padding:42px;background:#11131a;border:1px solid #ffffff18;border-radius:18px}h1{font:700 38px Georgia,serif}label{display:block;margin:24px 0 8px;font-size:13px}input{width:100%;padding:13px;border:1px solid #ffffff1c;border-radius:8px;background:#07080c;color:#fff;box-sizing:border-box}button{width:100%;padding:13px;margin-top:18px;border:0;border-radius:8px;background:linear-gradient(135deg,#c9a86a,#e0c28a);font-weight:bold}.message{margin:15px 0;padding:12px;border-radius:8px;background:#4c1d1d;color:#fecaca}.success{background:#173b2a;color:#bbf7d0}a{color:#e0c28a}
</style></head><body><main class="box"><h1>Ganti sandi</h1><?php if ($error): ?><div class="message"><?= htmlspecialchars($error) ?></div><?php elseif ($success): ?><div class="message success"><?= htmlspecialchars($success) ?><br><a href="yttta.php">Masuk ke akun</a></div><?php else: ?><form method="post"><input type="hidden" name="token" value="<?= htmlspecialchars($token) ?>"><label for="password">Password baru</label><input id="password" name="password" type="password" minlength="8" required><button type="submit">Simpan password</button></form><?php endif; ?></main></body></html>
