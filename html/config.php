<?php

$MYSQL_HOST = '127.0.0.1';
$MYSQL_USER = 'admin';
$MYSQL_PASS = '72Merasardtfy_';
$MYSQL_DB = 'zoom';

$mysqli = new mysqli($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASS, $MYSQL_DB);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

