// Convert to a class so everything can be imported more easily
export function getBaseUrl() {
  return 'https://master--ncapp3.netlify.com'
}

export function getLoginCredentials() {
  return {
    email: 'testmailmawr@gmail.com',
    password: 'Passw0rd',
  }
}

export function getUserCredentials() {
  return {
    name: 'Test Testson',
  }
}

export function getPaymentCard() {
  return {
    visa: {
      number: '4005519200000004',
      date: '1226',
      cvv: '123',
      lastDigitsInNumber: '0004',
    },
    masterCard: {
      number: '5555555555554444',
      date: '1225',
      cvv: '123',
      lastDigitsInNumber: '4444',
    }
  }
}


// Master Card. Number: 5555555555554444, Date: 1225, cvv: 123
// Visa. Number: 4005519200000004, Date: 1226, cvv: 123