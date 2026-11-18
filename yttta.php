<?php
session_start();
require "db.php";

$error = "";
$success = "";
$mode = $_GET["mode"] ?? "login";
$next = $_GET["next"] ?? "perpus.html";

if (!in_array($next, ["perpus.html", "admin.php", "user.php"], true)) {
    $next = "perpus.html";
}

if (isset($_GET["logout"])) {
    session_unset();
    session_destroy();
    header("Location: yttta.php");
    exit;
}

// kalau sesi valid, redirect ke halaman sesuai role
if (isset($_SESSION["login"]) && $_SESSION["login"] === true) {
    if ($_SESSION["role"] === "admin") {
        header("Location: admin.php");
        exit;
    } else {
        header("Location: user.php");
        exit;
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["login"])) {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if ($email === "" || $password === "") {
        $error = "Email dan password wajib diisi.";
    } else {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? LIMIT 1");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && (int) $user["is_active"] === 1 && password_verify($password, $user["password_hash"])) {
            session_regenerate_id(true);
            $_SESSION["login"] = true;
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["name"] = $user["name"];
            $_SESSION["email"] = $user["email"];
            $_SESSION["role"] = $user["role"];

            $pdo->prepare("UPDATE users SET last_login_at = NOW() WHERE id = ?")->execute([$user["id"]]);

            if ($user["role"] === "admin") {
                header("Location: admin.php");
            } else {
                header("Location: " . ($next === "perpus.html" ? "perpus.html?logged_in=1" : $next));
            }
            exit;
        } else {
            $error = "Email atau password salah.";
        }
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["register"])) {
    $name = trim($_POST["name"] ?? "");
    $email = strtolower(trim($_POST["email"] ?? ""));
    $password = $_POST["password"] ?? "";

    if ($name === "" || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 8) {
        $error = "Nama, email valid, dan password minimal 8 karakter wajib diisi.";
        $mode = "register";
    } else {
        try {
            $stmt = $pdo->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
            $stmt->execute([$name, $email, password_hash($password, PASSWORD_DEFAULT)]);
            $success = "Akun berhasil dibuat. Silakan masuk.";
            $mode = "login";
        } catch (PDOException $exception) {
            $error = $exception->getCode() === "23000" ? "Email tersebut sudah terdaftar." : "Pendaftaran gagal. Coba lagi.";
            $mode = "register";
        }
    }
}
?>
<!doctype html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= $mode === "register" ? "Daftar" : "Masuk" ?> | IQORGMslim</title>
    <style>
        :root { --gold: #c9a86a; --gold-light: #e0c28a; --dark: #07080c; --card: #11131a; --muted: #969aa5; }
        * { box-sizing: border-box; }
        body {
            margin: 0;
            min-height: 100vh;
            background: radial-gradient(circle at 78% 18%, rgba(201,168,106,.2), transparent 34%), var(--dark);
            color: #f5f2ea;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 24px;
        }
        .auth-shell { width: min(940px, 100%); display: grid; grid-template-columns: 1fr 1fr; background: rgba(17,19,26,.92); border: 1px solid rgba(255,255,255,.1); border-radius: 22px; overflow: hidden; box-shadow: 0 28px 90px #000; }
        .auth-intro { padding: 54px; background: linear-gradient(145deg, rgba(201,168,106,.22), transparent 52%), #0d0f14; display: flex; flex-direction: column; justify-content: center; }
        .brand { letter-spacing: 3px; font-size: 14px; font-weight: bold; }
        .brand b { color: var(--gold); }
        h1 { font: 700 clamp(38px, 5vw, 65px)/.98 Georgia, serif; margin: 34px 0 18px; }
        .auth-intro p { color: var(--muted); line-height: 1.8; max-width: 340px; }
        .auth-form { padding: 54px; }
        h2 { font: 700 32px Georgia, serif; margin: 0 0 8px; }
        .subtle { color: var(--muted); margin: 0 0 26px; }
        label { display: block; color: #c9c7c0; font-size: 13px; margin: 16px 0 8px; }
        input { width: 100%; padding: 13px 14px; border: 1px solid rgba(255,255,255,.14); border-radius: 9px; background: #0b0d12; color: white; outline: none; }
        input:focus { border-color: var(--gold); }
        button, .google { display: block; width: 100%; border: 0; border-radius: 9px; padding: 13px 16px; margin-top: 20px; font-weight: bold; cursor: pointer; text-align: center; text-decoration: none; }
        button { background: linear-gradient(135deg, var(--gold), var(--gold-light)); color: #111; }
        .google { background: #fff; color: #1f2937; margin-top: 12px; }
        .divider { display: flex; align-items: center; gap: 12px; color: #6f737e; font-size: 12px; margin: 20px 0; }
        .divider::before, .divider::after { content: ""; height: 1px; background: rgba(255,255,255,.12); flex: 1; }
        .links { display: flex; justify-content: space-between; gap: 10px; margin-top: 20px; font-size: 13px; }
        a { color: var(--gold-light); }
        .message { padding: 11px 13px; border-radius: 8px; margin-bottom: 15px; font-size: 13px; }
        .error { background: #4c1d1d; color: #fecaca; }
        .success { background: #163c2b; color: #bbf7d0; }
        @media (max-width: 700px) { .auth-shell { grid-template-columns: 1fr; } .auth-intro { padding: 34px; } .auth-intro h1 { margin: 18px 0 10px; } .auth-intro p { display: none; } .auth-form { padding: 34px; } }
    </style>
</head>
<body>
        <div class="auth-shell">
            <section class="auth-intro"><div class="brand"><b>IQ</b> IQORGMslim.</div><h1>Masuk ke dunia cerita.</h1><p>Kelola rak bacaanmu, temukan karya baru, dan lanjutkan perjalanan membaca di Pustaka Digital.</p></section>
            <section class="auth-form">
                <h2><?= $mode === "register" ? "Buat akun baru" : "Selamat datang kembali" ?></h2>
                <p class="subtle"><?= $mode === "register" ? "Daftar untuk mulai menyimpan koleksi." : "Masuk untuk melanjutkan membaca." ?></p>

        <?php if ($error): ?>
            <div class="message error"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>
        <?php if ($success): ?><div class="message success"><?= htmlspecialchars($success) ?></div><?php endif; ?>

        <form method="POST">
          <?php if ($mode === "register"): ?><label for="name">Nama lengkap</label><input id="name" type="text" name="name" required /><?php endif; ?>
          <label for="email">Email</label><input id="email" type="email" name="email" required />
          <label for="password">Password <?= $mode === "register" ? "(minimal 8 karakter)" : "" ?></label><input id="password" type="password" name="password" minlength="<?= $mode === "register" ? "8" : "1" ?>" required />
          <button type="submit" name="<?= $mode === "register" ? "register" : "login" ?>"><?= $mode === "register" ? "Buat akun" : "Masuk" ?></button>
        </form>
        <?php if ($mode !== "register"): ?><div class="divider">atau</div><a class="google" href="google-login.php?next=<?= urlencode($next) ?>">Lanjutkan dengan Google</a><?php endif; ?>
        <div class="links"><a href="yttta.php?mode=<?= $mode === "register" ? "login" : "register" ?>&next=<?= urlencode($next) ?>"><?= $mode === "register" ? "Sudah punya akun? Masuk" : "Belum punya akun? Daftar" ?></a><?php if ($mode !== "register"): ?><a href="forgot.php">Lupa sandi?</a><?php endif; ?></div>
      </section>
    </div>
</body>
</html>