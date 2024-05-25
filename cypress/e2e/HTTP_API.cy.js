describe("Modul 4 - zadanie domowe - http tests", () => {
    it("response code should be 200", () => {
        cy.request('https://httpbin.org').then(response => {
            const status = response.status;
            assert.equal(200, status);
    });
});

it("body should be url", () => {
    cy.request('GET','https://httpbin.org/get').then(response => {
        expect(response.body).to.have.property('url')
    })
})

it("response code should be 200", () => {
    cy.request('POST','https://httpbin.org/post').then(response => {
        const status = response.status;
        assert.equal(200, status);
    })
})

it("test duration", () => {
    cy.request('POST','https://httpbin.org/post').then(response => {
        assert.isTrue(response.duration <= 200);
    })
})

it("content-length check", () => {
    cy.request('GET','https://httpbin.org/image/png').then(response => {
        assert.equal(8090, response.headers['content-length']);
    })
})

it("response code should be 200", () => {
    cy.request('GET','https://httpbin.org/image/png').then(response => {
        const status = response.status;
        assert.equal(200, status);
    })
})   
it("test header", () => {
    cy.request('GET','https://httpbin.org/get').then(response => {
        assert.equal('application/json', response.headers['content-type']);
})
})

it("response code should be 405", () => {
    cy.request({
        method: 'PUT',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.eq(405);
})
})

it("body should be url", () => {
    cy.request({
        method: 'POST',
        url: 'https://httpbin.org/post',
        "key": "value"
    }).then(response => {
        expect(response.body).to.have.property('url')
    })
})


it("response code should be 400", () => {
    cy.request({
        method: 'PATCH', 
        url: 'https://httpbin.org/status/undefined',
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.eq(400);
    })
})
}); 