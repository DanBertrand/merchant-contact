import React from 'react';
import faker from 'faker';
import MailAdress from './Email';
import PhoneNumber from './Phone';

const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id:          faker.random.uuid(),
    firstName:   faker.name.firstName(),
    lastName:    faker.name.lastName(),
    avatar:      faker.image.business(),
    phoneNumber: faker.phone.phoneNumber(),
    profession:  faker.name.title()

    
  }));
  return (
    <div className="cards">
      
         {clientsList.map((client) => (
            <div key={client.id} class="card">
                <div className="image">
                    <img src={client.avatar} alt="avatar"/>
                </div>
                <div class="buttom-card">
                    <div>
                        <h1>{client.firstName} {client.lastName}</h1>
                        <p>{client.profession}</p>
                    </div>
                    <div class="contact-button">
                        <MailAdress firstName={client.firstName} lastName={client.lastName}/>
                        <PhoneNumber phone={client.phoneNumber}/>
                    </div>
                </div>
            </div>
            
        ))}
    </div>
  );
};

export default Clients;