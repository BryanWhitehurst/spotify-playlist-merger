<?php 
$servername = "bwhitehurst467229.ipagemysql.com";
$username = "rtwt4twrqrq";
$password = "12345";
$dbname = "fewte2t2t";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}


$sql = "DELETE FROM access_token";
        if(mysqli_query($conn, $sql)){
            echo "Deletion Successful.";
        } else{
            echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
        }
?>