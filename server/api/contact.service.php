
<?php 
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json;');

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      include_once '../models/Contact.php';

      $postdata = file_get_contents('php://input');
      $request = json_decode($postdata);

      $contact = new Contact($request);

      $from = 'Miami Top Cleaning Service';
      $replyTo = $contact->email;
      $headers = "From: $from\r\n";
      $headers .= "Reply-to: $replyTo\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

      $template = file_get_contents('../template/contact.email.html');
      $body = str_replace('{{name}}', 'Value', $template);

      mail('contact@miamitopcleaning.com', 'Service QUOTE Request', $body, $headers);

      echo 'OK';
  } else {
      echo 'Not Allowed';
  }

?>