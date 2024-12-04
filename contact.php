<?php
// Database connection variables
$host = "localhost";
$dbname = "vk_trends";
$username = "root";
$password = "";

// Establish database connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Prepare SQL query to insert data
$sql = "INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

// Execute and check if data is inserted successfully
if ($stmt->execute()) {
    header("Location: contact.html?status=success");
} else {
    header("Location: contact.html?status=error");
}

// Close the database connection
$stmt->close();
$conn->close();
?>
