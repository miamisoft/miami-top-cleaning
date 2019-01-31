
<?php 

class Contact
{
    public $fullname;
    public $street;
    public $suite;
    public $city;
    public $zipcode;
    public $email;
    public $phone;
    public $message;
    public $servicesDesc;

    public function __construct($data)
    {
        $this->fullname = $data->fullname;
        $this->street = $data->street;
        $this->suite = $data->suite;
        $this->city = $data->city;
        $this->zipcode = $data->zipcode;
        $this->email = $data->email;
        $this->phone = $data->phone;
        $this->message = $data->message;
        $this->servicesDesc = $data->servicesDesc;
    }
}

?>