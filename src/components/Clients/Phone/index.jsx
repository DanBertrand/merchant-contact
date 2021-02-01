const PhoneNumber = (props) => {
  return (
       <a className="btn btn-primary" href={`callto:${props.phone}`}>Call</a>
  );
};

export default PhoneNumber