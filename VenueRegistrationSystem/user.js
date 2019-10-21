class USER {
    constructor(matricno, organization) {
        this.matricno = matricno;
        this.Organization = organization;
    }
    get matricNo() {
        return this.matricno;
    }
    get Organization() {
        return this.organization;
    }
    set matricNo(matricno) {
        this.matricno = matricno;
    }
    set Organization(organization) {
        this.organization = organization;
    }
}
module.exports = USER;