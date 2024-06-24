describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MmViOThlYS01NWUxLTQ3NDUtOWNjOC0zMDExNTM3Y2M1NDQiLCJhZG9wdGVyTmFtZSI6IkFuZHLDqSIsImlhdCI6MTcxOTE1MTUwNiwiZXhwIjoxNzE5NDEwNzA2fQ.Q2tIpoa4HIG1Oo0yG-QBjS-y0EeOWM26yUyHEMe_XIY`
    


 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
         headers: { authorization }
        }) 
 })
})