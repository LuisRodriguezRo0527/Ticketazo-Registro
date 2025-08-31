describe('Registro de usuario en Ticketazo', () => {

  
  beforeEach(() => {
    
    cy.visit('https://ticketazo.com.ar/auth/login')

 
    cy.get('[data-cy="btn-register-user"]')
      .should('be.visible')
      .click()
  })
/*
  it('Debe registrar un usuario correctamente', () => {
    
    cy.fixture('cuenta').then((data) => {

      cy.get('[data-cy="input-nombres"]').should('be.visible').type(data.Nombres)
      cy.get('[data-cy="input-apellido"]').should('be.visible').type(data.Apellido)
      cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)
      cy.get('[data-cy="input-dni"]').should('be.visible').type(data.DNI)

      // Selecciona la Provincia
      cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Provincia).click()

      // Selecciona la Localidad
      cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Localidad).click()

      // Fecha de nacimiento
      cy.get('[data-type="day"]').clear().type('29')
      cy.get('[data-type="month"]').clear().type('08')
      cy.get('[data-type="year"]').clear().type('2025')

      // Email
      cy.get('[data-cy="input-email"]').type(data.email)
      cy.get('[data-cy="input-confirmar-email"]').type(data.email)

      // Password
      cy.get('[data-cy="input-password"]').type(data.password)
      cy.get('[data-cy="input-repetir-password"]').type(data.password)

      // Clic en registrar
      cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()

      cy.get('[data-cy="error-message"]').should('be.visible')
    })
  })

  it('Pruebas negativas:No permitir Registrarse con todos los campos vacíos', () => {

    cy.visit('https://ticketazo.com.ar/auth/login')

    cy.get('[data-cy="btn-register-user"]')
      .should('be.visible')
      .click()

    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
  })

it('Prueba negativa: Registrar usuario sin completar el campo Nombres', () => {
  cy.fixture('cuenta').then((data) => {

    // Campo Nombres vacío
    cy.get('[data-cy="input-nombres"]').should('be.visible').clear()
    cy.get('[data-cy="input-apellido"]').should('be.visible').type(data.Apellido)
    cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)
    cy.get('[data-cy="input-dni"]').should('be.visible').type(data.DNI)
    cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="option"]', data.Provincia).click()
    cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="option"]', data.Localidad).click()
    cy.get('[data-type="day"]').clear().type('15')
    cy.get('[data-type="month"]').clear().type('08')
    cy.get('[data-type="year"]').clear().type('1995')
    cy.get('[data-cy="input-email"]').type(data.email)
    cy.get('[data-cy="input-confirmar-email"]').type(data.email)
    cy.get('[data-cy="input-password"]').type(data.password)
    cy.get('[data-cy="input-repetir-password"]').type(data.password)
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
    cy.contains('Completa este campo').should('be.visible')
  })
})

it('Prueba negativa: Registrar usuario sin completar el campo Apellido', () => {
  cy.fixture('cuenta').then((data) => {

    // Campo Apellido vacío
    cy.get('[data-cy="input-nombres"]').should('be.visible').type(data.Nombres)
    cy.get('[data-cy="input-apellido"]').should('be.visible').clear()
    cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)
    cy.get('[data-cy="input-dni"]').should('be.visible').type(data.DNI)
    cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="option"]', data.Provincia).click()
    cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="option"]', data.Localidad).click()
    cy.get('[data-type="day"]').clear().type('15')
    cy.get('[data-type="month"]').clear().type('08')
    cy.get('[data-type="year"]').clear().type('1995')
    cy.get('[data-cy="input-email"]').type(data.email)
    cy.get('[data-cy="input-confirmar-email"]').type(data.email)
    cy.get('[data-cy="input-password"]').type(data.password)
    cy.get('[data-cy="input-repetir-password"]').type(data.password)
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
    cy.contains('Completa este campo').should('be.visible')
  })
})

it('Pruebas negativas: validación de caracteres no permitidos en el campo "Nombres" y "Apellidos"', () => {
    
    cy.fixture('cuenta').then((data) => {

      cy.get('[data-cy="input-nombres"]').should('be.visible').type('L/3u"#L;')
      cy.get('[data-cy="input-apellido"]').should('be.visible').type('L/3u"#L;')
      cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)
      cy.get('[data-cy="input-dni"]').should('be.visible').type(data.DNI)

      cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Provincia).click()

      cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Localidad).click()

      cy.get('[data-type="day"]').clear().type('29')
      cy.get('[data-type="month"]').clear().type('08')
      cy.get('[data-type="year"]').clear().type('2025')

      cy.get('[data-cy="input-email"]').type(data.email)
      cy.get('[data-cy="input-confirmar-email"]').type(data.email)

      cy.get('[data-cy="input-password"]').type(data.password)
      cy.get('[data-cy="input-repetir-password"]').type(data.password)

      cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()

      cy.get('[data-cy="error-message"]').should('be.visible')
    })
 })
  
  it('Pruebas negativas: minimos y maximos de caracteres en los campos "Nombres" y "Apellidos"', () => {
    
    cy.fixture('cuenta').then((data) => {

      cy.get('[data-cy="input-nombres"]').clear().type('Lui').invoke('val').then((value) => {expect(value.length).to.be.at.least(3);});
      cy.get('[data-cy="input-apellido"]').clear().type('Rodriguezzzzzzzzzzz').invoke('val').then((value) => {expect(value.length).to.be.at.most(20);});
      cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)
      cy.get('[data-cy="input-dni"]').should('be.visible').type(data.DNI)

      cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Provincia).click()

      cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Localidad).click()

      cy.get('[data-type="day"]').clear().type('29')
      cy.get('[data-type="month"]').clear().type('08')
      cy.get('[data-type="year"]').clear().type('2025')

      cy.get('[data-cy="input-email"]').type(data.email)
      cy.get('[data-cy="input-confirmar-email"]').type(data.email)

      cy.get('[data-cy="input-password"]').type(data.password)
      cy.get('[data-cy="input-repetir-password"]').type(data.password)

      cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()

      cy.get('[data-cy="error-message"]').should('be.visible')
    })
 })

  it('Pruebas negativas: teléfono"', () => {
    
    cy.fixture('cuenta').then((data) => {

      cy.get('[data-cy="input-nombres"]').should('be.visible').type('Luis')
      cy.get('[data-cy="input-apellido"]').should('be.visible').type('Rodriguez')
      cy.get('[data-cy="input-telefono"]').should('be.visible').type('123456789')
      cy.get('[data-cy="input-dni"]').should('be.visible').type(data.DNI)

      cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Provincia).click()

      cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
      cy.get('[role="listbox"]').should('be.visible')
      cy.contains('[role="option"]', data.Localidad).click()

      cy.get('[data-type="day"]').clear().type('29')
      cy.get('[data-type="month"]').clear().type('08')
      cy.get('[data-type="year"]').clear().type('2025')

      cy.get('[data-cy="input-email"]').type(data.email)
      cy.get('[data-cy="input-confirmar-email"]').type(data.email)

      cy.get('[data-cy="input-password"]').type(data.password)
      cy.get('[data-cy="input-repetir-password"]').type(data.password)

      cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
      cy.contains('Haz coincidir el formato solicitado').should('be.visible')
    })
  })

  it('Prueba negativa: Registrar usuario sin completar el campo DNI', () => {
  cy.fixture('cuenta').then((data) => {

    // Campo DNI vacío
    cy.get('[data-cy="input-nombres"]').should('be.visible').type(data.Nombres)
    cy.get('[data-cy="input-apellido"]').should('be.visible').type(data.Apellido)
    cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)
    cy.get('[data-cy="input-dni"]').should('be.visible').clear()
    cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="option"]', data.Provincia).click()
    cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
    cy.get('[role="listbox"]').should('be.visible')
    cy.contains('[role="option"]', data.Localidad).click()
    cy.get('[data-type="day"]').clear().type('15')
    cy.get('[data-type="month"]').clear().type('08')
    cy.get('[data-type="year"]').clear().type('1995')
    cy.get('[data-cy="input-email"]').type(data.email)
    cy.get('[data-cy="input-confirmar-email"]').type(data.email)
    cy.get('[data-cy="input-password"]').type(data.password)
    cy.get('[data-cy="input-repetir-password"]').type(data.password)
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
    cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
    cy.contains('Completa este campo').should('be.visible')
  })
})
*/
it('Prueba negativa: Registrar usuario sin completar el Campo DNI sin la cantidad exacta de dígitos', () => {
  cy.fixture('cuenta').then((data) => {

    // Campo DNI sin la cantidad exacta de dígitos
    cy.get('[data-cy="input-nombres"]').should('be.visible').type(data.Nombres)
cy.get('[data-cy="input-apellido"]').should('be.visible').type(data.Apellido)
cy.get('[data-cy="input-telefono"]').should('be.visible').type(data.Telefono)

// Alias para el campo DNI
cy.get('[data-cy="input-dni"]').as('dni').should('be.visible').clear().type('12').blur()

cy.get('[data-cy="select-provincia"]').should('be.visible').type(data.Provincia)
cy.get('[role="listbox"]').should('be.visible')
cy.contains('[role="option"]', data.Provincia).click()

cy.get('[data-cy="select-localidad"]').should('be.visible').type(data.Localidad)
cy.get('[role="listbox"]').should('be.visible')
cy.contains('[role="option"]', data.Localidad).click()

cy.get('[data-type="day"]').clear().type('15')
cy.get('[data-type="month"]').clear().type('08')
cy.get('[data-type="year"]').clear().type('1995')

cy.get('[data-cy="input-email"]').type(data.email)
cy.get('[data-cy="input-confirmar-email"]').type(data.email)
cy.get('[data-cy="input-password"]').type(data.password)
cy.get('[data-cy="input-repetir-password"]').type(data.password)

// Click en registrarse
cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()

// ✅ Validar que el input DNI tenga aria-invalid
cy.get('@dni').should('have.attr', 'aria-invalid', 'true')

// ✅ Validar que se muestre el mensaje de error debajo
cy.get('@dni')
  .parents('[data-slot="input-wrapper"]')
  .parent()
  .find('[data-slot="error-message"]')
  .should('be.visible')
  .and('contain.text', 'Haz coincidir el formato solicitado.')

    
  })
})
/*    
it('Pruebas negativas: No permitir Registrarse con email inválido', () => {

  cy.visit('https://ticketazo.com.ar/auth/login')

  cy.get('[data-cy="btn-register-user"]')
    .should('be.visible')
    .click()

  cy.get('[data-cy="input-email"]').type('correo-invalido')
  cy.get('[data-cy="input-confirmar-email"]').type('correo-invalido')

  cy.get('[data-cy="btn-registrarse"]').should('be.enabled').click()
})*/

})

