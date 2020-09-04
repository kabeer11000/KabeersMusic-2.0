<?php
session_start();
include 'dbConnect.php';

if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    echo json_encode('{"login": "failed"}');
    exit;
} else {
    $username = mysqli_real_escape_string($db, strip_tags($_SERVER['PHP_AUTH_USER']));
    $password = mysqli_real_escape_string($db, strip_tags($_SERVER['PHP_AUTH_PW']));
    if (empty($username)) {
        array_push($errors, "Username is required");
    }
    gc_collect_cycles();
    if (empty($password)) {
        array_push($errors, "Password is required");
    }
    if (count($errors) == 0) {
        $password = md5($password);
        $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $results = mysqli_query($db, $query);
        if (mysqli_num_rows($results) == 1) {
            //

            $find_id_query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
            $id_query_result = mysqli_query($db, $query);
            $id_query_result = mysqli_fetch_assoc($id_query_result);

            if (empty($id_query_result['uniqueId'])) {
                array_push($errors, "Id Not Found");
            }
            //
            $_SESSION['username'] = $username;
            $_SESSION['image'] = $id_query_result['picture'];
            $_SESSION['success'] = "You are now logged in";
            $_SESSION['id'] = $id_query_result['uniqueId'];
            $_SESSION['plus'] = $id_query_result['plus'];
            gc_collect_cycles();

            mysqli_free_result($id_query_result);
            //header('location: ../index.php?id='.$id_query_result['uniqueId']);
//Adding Session Info
            $ipaddress = $_SERVER["REMOTE_ADDR"];
            function ip_details($ip)
            {
                $json = file_get_contents("http://ipinfo.io/{$ip}/geo");
                $details = json_decode($json);
                return $details;
            }

            $details = ip_details($ipaddress);
            $loc = $details->loc;
            $uniqueToken = md5(uniqid()) . md5(uniqid()) . date();
            $time = date('Y-m-d H:i:s');
            $ipaddress = str_replace('.', '-', $details->ip);
            $query = "INSERT INTO `logins`(`ip`, `username`, `time`, `uniqueToken`, `loc`) VALUES ('$ipaddress','$username','$time','$uniqueToken','$loc');";
            mysqli_query($db, $query);
            gc_collect_cycles();
//Adding Session Info
            setcookie("username", $_SESSION["username"], time() + 3600);
            setcookie("password", strip_tags($_SERVER['PHP_AUTH_PW']), time() + 3600);
            echo '{"login": "success","username":"' . $username . '","id":"' . $_SESSION['id'] . '", "avatar": "http://drive.hosted-kabeersnetwork.unaux.com/user-AccountImages/' . $_SESSION['image'] . '", "is_plus":"' . $_SESSION['plus'] . '"}';
            exit;
            //echo '<script>window.history.back();</script>'
        } else {
            array_push($errors, "Wrong username/password combination!");
            gc_collect_cycles();
        }
    }

    mysqli_close($db);
    gc_collect_cycles();


}
