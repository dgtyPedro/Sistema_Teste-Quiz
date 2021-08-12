
<?php
$servername="databaselink";
$username="username";
$password="password";
$dbname="mydatabase";
$conn = new mysqli($servername, $username, $password, $dbname);

$mysqli = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error){
    die("Falha na conexão".$conn->connect_error);
}
echo nl2br ("Conexão concluida. \n");

#---------check var---------#

if (isset($_GET['email'],$_GET['at'],$_GET['af'],$_GET['pe'],$_GET['ar'],$_GET['de'],$_GET['he'])){

    $email=$_GET["email"];
    $at=$_GET["at"];
    $af=$_GET["af"];
    $pe=$_GET["pe"];
    $ar=$_GET["ar"];
    $de=$_GET["de"];
    $he=$_GET["he"];

#---------check email---------#

    

if ($result = $mysqli->query("SELECT * FROM mydatabase WHERE email_nome='$email'")) {

        $row_cnt = $result->num_rows;
    
        if ($row_cnt>0){
            echo nl2br("Esse email já está cadastrado, substituindo os resultados. . .\n");
            $sql = "DELETE FROM mydatabase WHERE email_nome='$email'";
            if ($conn->query($sql) === TRUE) {
            echo nl2br ("Resultados substituídos. \n");
            } else {
            echo nl2br ("Erro na substituição: \n") . $conn->error;
            }

        }
        
    
        /* close result set */
        $result->close();
    }


    

#---------insert----------#

    $stmt = $conn->prepare("INSERT INTO mydatabase (email_nome, dummy_one, dummy_two, dummy_three, dummy_four, dummy_five, dummy_six) VALUES (?, ?, ?, ?, ?,?,?)");
    $stmt->bind_param("sssssss", $email , $at, $af, $pe, $ar, $de, $he);
    $stmt->execute();
    $stmt->close();
}
echo nl2br ("Resultado enviado ao banco de dados, o resultado estará disponível no e-mail em menos de 10 minutos! \n");
echo nl2br ("Pode fechar esta aba. \n");
$conn->close(); 
?>


