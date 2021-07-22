/// <reference types="cypress" />

describe("Post Request", () => {

    it("Create a new post via /posts api", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                title: "Want to learn automation testing?",
                author: "Sarah Jones"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    });
});