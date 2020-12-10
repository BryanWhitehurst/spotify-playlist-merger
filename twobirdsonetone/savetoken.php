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

$result = mysqli_query($conn, "SELECT * FROM access_token");
$row_cnt = mysqli_num_rows($result);

echo $row_cnt;
//printf("Result set has %d rows.\n", $row_cnt);
mysql_close($conn);
?>