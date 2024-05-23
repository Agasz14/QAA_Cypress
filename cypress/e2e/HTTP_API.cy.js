import { assert } from "console";
import { type } from "os";

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
        assert.equal(8090, response.content-length);
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
        assert.equal('key=value', response.headers['Set-Cookie']);
})
})

it("response code should be 405", () => {
    cy.request('PUT','https://httpbin.org/post').then(response => {
        const status = response.status;
        assert.equal(405, status);
})
})

it("body should be url", () => {
    cy.request('GET','https://httpbin.org/post', {"key": "value"}).then(response => {
        expect(response.body).to.have.property('key', 'value')
    })
})


it("response code should be 400", () => {
    cy.request('PATCH', 'https://httpbin.org/status/undefined', {failOnStatusCode: false}).then(response => {
        assert.equal(400, response.status);
    })
})
}); 