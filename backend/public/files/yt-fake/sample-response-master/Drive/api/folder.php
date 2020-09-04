<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
session_start();
include 'dbConnect.php';


if (isset($_GET['id'])) {
    $folderId = strip_tags(htmlspecialchars($_GET['id']));
    $url = 'http://drive.hosted-kabeersnetwork.unaux.com/user-files/';

    $user_check_query = "SELECT * FROM `folders` WHERE uniqueId='" . $folderId . "' LIMIT 1;";
    $result = mysqli_query($db, $user_check_query);
    $user = mysqli_fetch_assoc($result);
    if ($user) {
        if ($user['uniqueId'] != $folderId) {
            echo "Folder Not Found";
            exit;
        }
    }

    $query = "SELECT `name`, `uniqueId`, `shared`, `owner`, `dateCreated`, `dateModified` FROM `folders` WHERE owner = '" . $_SESSION['username'] . "' AND parent = '" . $folderId . "' AND myDrive=0;";
    $result = mysqli_query($db, $query);
    $folderArray = array();
    $totalFolders = 0;
    if (!empty($result)) {
        while ($file = mysqli_fetch_row($result)) {
            $name = $file[0];
            $uniqueId = $file[1];
            $shared = $file[2];
            $owner = $file[3];
            $dateCreated = $file[4];
            $dateModified = $file[5];
            $array = [
                "name" => "$name",
                "id" => "$uniqueId",
                "shared" => "$shared",
                "owner" => "$owner",
                "dateCreated" => "$dateCreated",
                "dateModified" => "$dateModified"
            ];
            array_push($folderArray, $array);
            $totalFolders = $totalFolders + 1;
        }
    }
    $query = "SELECT `name`,`uniqueId`, `address`,`shared`,`mimeType`, `owner`, `dateCreated`, `dateModified` FROM `files` WHERE owner ='" . $_SESSION['username'] . "' AND parent='" . $folderId . "';";
    $result = mysqli_query($db, $query);
    $fileArray = array();
    $totalResults = 0;
    if (!empty($result)) {
        while ($file = mysqli_fetch_row($result)) {
            $name = $file[0];
            $uniqueId = $file[1];
            $address = $file[2];
            $shared = $file[3];
            $mime = $file[4];
            $owner = $file[5];
            $dateCreated = $file[6];
            $dateModified = $file[7];
            $size = filesize('../.././user-files/' . $address);
            $path = $url . $file[2];
            $thumb = '';
            if (in_array($mime, ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'])) {
                $thumb = $path;
            } else if (in_array($mime, ['video/ogg', 'video/m4a', 'video/ogg', 'video/mov', 'video/mp4'])) {
                $thumb = 'http://docs-kabeersnetwork-kview-app-sta.rf.gd/icons/movie.svg';
            } else if (in_array($mime, ['text/css', 'text/x-php', 'text/html', 'text/xhtml', 'text/plain', 'image/svg', 'image/svg+xml', 'text/javscript'])) {
                $thumb = 'http://docs-kabeersnetwork-kview-app-sta.rf.gd/icons/code.svg';
            } else if (in_array($mime, array('application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/rtf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'))) {
                $thumb = 'http://docs-kabeersnetwork-kview-app-sta.rf.gd/icons/picture_as_pdf.svg';
            } else {
                $thumb = 'http://docs-kabeersnetwork-kview-app-sta.rf.gd/icons/archive.svg';
            }
            $array = [
                "name" => "$name",
                "id" => "$uniqueId",
                "size" => "$size",
                "path" => "$path",
                "shared" => "$shared",
                "mime" => "$mime",
                "owner" => "$owner",
                "thumbnail" => "$thumb",
                "dateCreated" => "$dateCreated",
                "dateModified" => "$dateModified"
            ];
            array_push($fileArray, $array);
            $totalResults = $totalResults + 1;
        }
        $query = "SELECT * FROM `folders` WHERE owner ='" . $_SESSION['username'] . "' AND `uniqueId` ='" . $folderId . "' AND myDrive = 0 LIMIT 1;";
        $result = mysqli_fetch_assoc(mysqli_query($db, $query));

        $name = $result['name'];
        $id = $result['uniqueId'];
        $shared = $result['shared'];
        $owner = $result['owner'];
        $dateCreated = $result['dateCreated'];
        $dateModified = $result['dateModified'];
        $jayParsedAry = [
            "name" => $name,
            "id" => $id,
            "shared" => $shared,
            "owner" => $owner,
            "dateCreated" => $dateCreated,
            "dateModified" => $dateModified,
            "TotalFolders" => $totalFolders,
            "Folders" => $folderArray,
            "TotalFiles" => $totalResults,
            "Files" => $fileArray
        ];
        if (!empty($jayParsedAry)) {
            echo json_encode($jayParsedAry);
        }
    }


}

?>
