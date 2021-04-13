<?php
require_once('./contact_config.php');
require_once('./src/Exception.php');
require_once('./src/PHPMailer.php');
require_once('./src/SMTP.php');

$playerPicks = $_POST['playerPicks'];

$mail = new PHPMailer\PHPMailer\PHPMailer;
$mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'johntheholman@gmail.com';  // sender's email address (shows in "From" field)
$mail->FromName = 'John Holman';   // sender's name (shows in "From" field)
$mail->addAddress($playerPicks['email'], $playerPicks['name'] );  // Add a recipient (name is optional)
//$mail->addAddress('ellen@example.com');                        // Add a second recipient
$mail->addReplyTo('johntheholman@gmail.com');                          // Add a reply-to address
//$mail->addCC('cc@example.com');
$mail->addBCC('johntheholman@gmail.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Oscar Picks for 2021 | johntheholman.com';
$mail->Body    = 'Hello '.$playerPicks['name'].',<br>'.
                    '<br>'.'Here is a copy of your picks for the 2021 Oscars: <br>'.
                    '<br>'.
                    'Best Picture: '.$playerPicks['best-picture'].' with a confidence of '.$playerPicks['best-picture-confidence'].'<br>'.
                    'Actor in a Leading Role: '.$playerPicks['actor-in-a-leading-role'].' with a confidence of '.$playerPicks['actor-in-a-leading-role-confidence'].'<br>'.
                    'Actress in a Leading Role: '.$playerPicks['actress-in-a-leading-role'].' with a confidence of '.$playerPicks['actress-in-a-leading-role-confidence'].'<br>'.
                    'Actor in a Supporting Role: '.$playerPicks['actor-in-a-supporting-role'].' with a confidence of '.$playerPicks['actor-in-a-supporting-role-confidence'].'<br>'.
                    'Actress in a Supporting Role: '.$playerPicks['actress-in-a-supporting-role'].' with a confidence of '.$playerPicks['actress-in-a-supporting-role-confidence'].'<br>'.
                    'Animated Feature Film: '.$playerPicks['animated-feature-film'].' with a confidence of '.$playerPicks['animated-feature-film-confidence'].'<br>'.
                    'Cinematography: '.$playerPicks['cinematography'].' with a confidence of '.$playerPicks['cinematography-confidence'].'<br>'.
                    'Costume Design: '.$playerPicks['costume-design'].' with a confidence of '.$playerPicks['costume-design-confidence'].'<br>'.
                    'Directing: '.$playerPicks['directing'].' with a confidence of '.$playerPicks['directing-confidence'].'<br>'.
                    'Documentary (Feature): '.$playerPicks['documentary-feature'].' with a confidence of '.$playerPicks['documentary-feature-confidence'].'<br>'.
                    'Documentary (Short Subject): '.$playerPicks['documentary-short'].' with a confidence of '.$playerPicks['documentary-short-confidence'].'<br>'.
                    'Film Editing: '.$playerPicks['film-editing'].' with a confidence of '.$playerPicks['film-editing-confidence'].'<br>'.
                    'Foreign Language Film: '.$playerPicks['foreign-language-film'].' with a confidence of '.$playerPicks['foreign-language-film-confidence'].'<br>'.
                    'Makeup and Hairstyling: '.$playerPicks['makeup-and-hairstyling'].' with a confidence of '.$playerPicks['makeup-and-hairstyling-confidence'].'<br>'.
                    'Music (Original Score): '.$playerPicks['music-original-score'].' with a confidence of '.$playerPicks['music-original-score-confidence'].'<br>'.
                    'Music (Original Song): '.$playerPicks['music-original-song'].' with a confidence of '.$playerPicks['music-original-song-confidence'].'<br>'.
                    'Production Design: '.$playerPicks['production-design'].' with a confidence of '.$playerPicks['production-design-confidence'].'<br>'.
                    'Short Film (Animated): '.$playerPicks['short-film-animated'].' with a confidence of '.$playerPicks['short-film-animated-confidence'].'<br>'.
                    'Short Film (Live Action): '.$playerPicks['short-film-live-action'].' with a confidence of '.$playerPicks['short-film-live-action-confidence'].'<br>'.
                    'Sound Editing: '.$playerPicks['sound'].' with a confidence of '.$playerPicks['sound-confidence'].'<br>'.
                    'Visual Effects: '.$playerPicks['visual-effects'].' with a confidence of '.$playerPicks['visual-effects-confidence'].'<br>'.
                    'Writing (Adapted Screenplay): '.$playerPicks['writing-adapted-screenplay'].' with a confidence of '.$playerPicks['writing-adapted-screenplay-confidence'].'<br>'.
                    'Writing (Original Screenplay): '.$playerPicks['writing-original-screenplay'].' with a confidence of '.$playerPicks['writing-original-screenplay-confidence'].'<br>'.
                    '<br>'.
                    'Thank you for playing and good luck on Oscar night!';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
