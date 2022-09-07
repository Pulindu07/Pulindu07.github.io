function sendMail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "pulindujanith@gmail.com",
	Password : "65649E5589F47B4C3732E20593F69F8C3AEB",
	To : 'snapped.pj@gmail.com',
	From : "sm@example.com",
	Subject : "something",
	Body : "Mail body",
	}).then(
		message => alert("mail sent successfully")
	);
}