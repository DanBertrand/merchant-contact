const MailAdress = (props) => {
  
  return (
      <>
    <a className="btn btn-primary" href={`mailto:${props.firstName.toLowerCase()}.${props.lastName.toLowerCase()}@gmail.com`}>Send an Email</a>
    </>
  );
};

export default MailAdress;