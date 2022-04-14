import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'
import SignupPage from '../pages/SignupPage'

// beforeEach(function(){
//   cy.fixture('deliver').then((d)=>{
//     this.deliver = d
//   })
// })

describe('Signup', () => {
  it('User should be deliver', function () {
    var deliver = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMassage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMassage)
  })

  it('Incorrect document', function () {
    var deliver = signupFactory.deliver()

    deliver.cpf = '123456789aa'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessegeShouldBe('Oops! CPF inválido')
  })

  it('Incorrect email', function () {
    var deliver = signupFactory.deliver()

    deliver.email = 'rafael.com.br'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessegeShouldBe('Oops! Email com formato inválido.')
  })

  context('Required fields', function () {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: ' necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    before(function () {
      SignupPage.go()
      SignupPage.submit()
    })

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        SignupPage.alertMessegeShouldBe(msg.output)
      })
    })
  })
})
