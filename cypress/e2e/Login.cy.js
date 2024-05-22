import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const homePage = new HomePage();

describe("Modul 3 - zadanie domowe", () => {
    it("log in and log out with user888@gmail.com", () => {
        LoginPage.visit();
        LoginPage.login('user888@gmail.com', '1234567890');
        homePage.logout();
    });   
    it("log in and log out with testowyqa@qa.team", () => {
        LoginPage.visit();
        LoginPage.login('testowyqa@qa.team', 'QA!automation-1');
        homePage.logout();
    });  
});