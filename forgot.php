<?php
session_start();
require "db.php";

$message = "Masukkan email akunmu. Jika terdaftar, tautan reset akan dibuat.";
$resetLink = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = strtolower(trim($_POST["email"] ?? ""));
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? AND is_active = 1 LIMIT 1");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user) {
        $token = bin2hex(random_bytes(32));
        $hash = hash("sha256", $token);
        $pdo->prepare("UPDATE password_reset_tokens SET used_at = NOW() WHERE user_id = ? AND used_at IS NULL")->execute([$user["id"]]);
        $stmt = $pdo->prepare("INSERT INTO password_reset_tokens (user_id, token_hash, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))");
        $stmt->execute([$user["id"], $hash]);
        $resetLink = "reset.php?token=" . urlencode($token);
        $message = "Tautan reset dibuat dan berlaku selama 1 jam.";
        // Pada produksi, kirim $resetLink lewat layanan email transactional.
    }
}
?>
<!doctype html>
<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Lupa Sandi | IQORGMslim</title><style>
:root{--gold:#c9a86a;--gold2:#e0c28a}*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 75% 20%,#c9a86a33,transparent 35%),#07080c;color:#f5f2ea;font-family:Arial,sans-serif}.box{width:min(440px,100%);padding:42px;background:#11131a;border:1px solid #ffffff18;border-radius:18px;box-shadow:0 25px 70px #000}h1{font:700 38px Georgia,serif;margin:0 0 10px}.muted{color:#969aa5;line-height:1.6}label{display:block;margin:24px 0 8px;font-size:13px}input{width:100%;padding:13px;border:1px solid #ffffff1c;border-radius:8px;background:#07080c;color:#fff}button{width:100%;padding:13px;margin-top:18px;border:0;border-radius:8px;background:linear-gradient(135deg,var(--gold),var(--gold2));font-weight:bold;cursor:pointer}.notice{margin-top:20px;padding:12px;border-radius:8px;background:#173b2a;color:#bbf7d0;font-size:13px;word-break:break-word}a{color:var(--gold2)}
</style></head><body><main class="box"><h1>Lupa sandi?</h1><p class="muted">Masukkan email akunmu untuk mendapatkan tautan penggantian password.</p><form method="post"><label for="email">Email</label><input id="email" name="email" type="email" required><button type="submit">Buat tautan reset</button></form><p class="muted"><a href="yttta.php">Kembali ke login</a></p><?php if ($resetLink): ?><div class="notice">Untuk pengujian lokal: <a href="<?= htmlspecialchars($resetLink) ?>">Buka tautan reset</a></div><?php endif; ?></main></body></html>
