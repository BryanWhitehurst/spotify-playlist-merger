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

$arr = array();

$result = mysqli_query($conn, 'SELECT accesstoken FROM access_token');
$arr = array(mysqli_fetch_assoc($result)['accesstoken'], mysqli_fetch_assoc($result)['accesstoken']);
/*for($i = 0; $i < 2; $i++){
    $row = mysqli_fetch_array($result);
    $arr[] = $row['accesstoken']; 
}
*/
echo json_encode($arr);
mysql_close($conn);
?>