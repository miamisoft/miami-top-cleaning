
<?php 
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json;');

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      include_once '../models/Contact.php';

      $postdata = file_get_contents('php://input');
      $request = json_decode($postdata);

      $contact = new Contact($request);

      $from = 'Miami Top Cleaning';
      $replyTo = $contact->email;
      $headers = "From: $from\r\n";
      $headers .= "Reply-to: $replyTo\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

      $template = file_get_contents('../template/contact.email.html');
      $body = str_replace('{{fullname}}', $contact->fullname, $template);
      $body = str_replace('{{street}}', $contact->street, $body);
      $body = str_replace('{{suite}}', $contact->suite, $body);
      $body = str_replace('{{city}}', $contact->city, $body);
      $body = str_replace('{{zipcode}}', $contact->zipcode, $body);
      $body = str_replace('{{phone}}', $contact->phone, $body);
      $body = str_replace('{{email}}', $contact->email, $body);
      $body = str_replace('{{servicesDesc}}', $contact->servicesDesc, $body);
      $body = str_replace('{{message}}', $contact->message, $body);
      $body = str_replace('{{date}}', $contact->date, $body);

      mail('contact@miamitopcleaning.com', 'QUOTE Request('.$contact->fullname.')', $body, $headers);

      echo 'OK';
  } else {
      echo 'Not Allowed';
  }

?>