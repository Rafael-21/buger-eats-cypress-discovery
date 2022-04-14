const faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function(){

    var firstName = faker.name.firstName();
    var lastName =  faker.name.lastName();
    
    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '85998664784',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 142',
        distric: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data

  }

}