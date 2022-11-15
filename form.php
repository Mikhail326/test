<?php 

$req = (object) $_REQUEST;

print json_encode([
    'number'    => strtoupper($req->number),
]);

?> 
