const app = new Vue({
  el: "#app",
  data: {
    errors: [],
    dealerName: null,
    url: null,
    printName: null,
    position: null,
    signature: null,
    devCompany: null,
    conName: null,
    conNumber: null,
    conEmail: null,
    success: ""
  },

  methods: {
    checkForm: function(e) {
      this.errors = [];

      if (!this.dealerName) {
        this.errors.push("Dealer Name Required");
      }

      if (!this.url) {
        this.errors.push("URL Required");
      }

      if (!this.printName) {
        this.errors.push("Print Name Required");
      }

      if (!this.position) {
        this.errors.push("Position Title is Required");
      }

      if (!this.signature) {
        this.errors.push("Signature is Required");
      }

      if (!this.devCompany) {
        this.errors.push("Development Company Name is Required");
      }

      if (!this.conName) {
        this.errors.push("Contact Name is Required");
      }

      if (!this.conNumber) {
        this.errors.push("Company Contact Number Required");
      } else if (!this.validNumber(this.conNumber)) {
        this.errors.push("Company Contact Number is Not Formatted Correctly");
      }

      if (!this.conEmail) {
        this.errors.push("Email Required");
      } else if (!this.validEmail(this.conEmail)) {
        this.errors.push("Email is Not Valid");
      }

      if (!this.errors.length) {
        return true;
      }
      
      this.success = "Thank you for your submission, we look forward to reaching out to you and starting a new partnership!"
      e.preventDefault();
    },

    validNumber: function(conNumber) {
      let phoneRegex = "^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$";
      return phoneRegex.text(conNumber);
    },
    validEmail: function(email) {
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(email);
    }
  }
});
