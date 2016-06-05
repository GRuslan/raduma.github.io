var app = angular.module("app", []);

app.controller('LanguageCtrl', ['$scope', function LanguageController($scope) {
  $scope.language = texts.sk;
  $scope.setLanguage = function (language) {
    $scope.language = texts[language];
  };
}]);

var texts = {
  ru: {
    contact_us: "Cвязаться с нами",
    phone_number: "Номер телефона",
    your_name: "Ваше имя",
    submit: "Отправить",
    adress: "Наш адрес",
  },
  sk: {
    contact_us: "Kontaktujte nás",
    phone_number: "Номер телефона",
    your_name: "Vaše meno",
    submit: "Predložiť",
    adress: "Naša adresa",
  },
  en: {
    contact_us: "Contact us",
    phone_number: "Phone number",
    your_name: "Your name",
    submit: "Submit",
    adress: "Our adress",
  }
};