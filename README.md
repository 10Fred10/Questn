<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]](https://github.com/10Fred10/Questn/graphs/contributors)
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Gmail][gmail-shield]][gmail-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/10Fred10/Questn">
    <img src="https://raw.githubusercontent.com/10Fred10/Questn/master/readme-assets/questn-logo.png" alt="Logo">
  </a>

  <p align="center">
    Restful API for a mobile app that rewards users based on mission completion.
    <br />
    <a href="https://app.swaggerhub.com/apis/Questn/Questn/1.0.0#/" target="_blank"><strong>« DOC »</strong></a>
    <br />
    <br />
    <a href="https://github.com/10Fred10/Questn/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/10Fred10/Questn/pulls" target="_blank">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

| Table of Contents                       |
| --------------------------------------- |
| [About the Project](#about-the-project) |
| [Install & Config](#Install-&-Config)   |
| [Usage](#usage)                         |
| [Contributing](#Contributing)           |
| [Contact](#contact)                     |
| [License](#License)                     |
| [Acknowledgements](#acknowledgements)   |

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <img  src="https://raw.githubusercontent.com/10Fred10/Questn/master/readme-assets/questn-welcome.png">
</p>
<br>

> _This is a project I made in my BioInformatics Class._

A desktop application that splits a genome sequence into words of length k, then generates a `Boolean` | `Frequency` | `Occurence` | `TFIDF` matrix I use later to train a classifier.

### Built With

<p align="center">
  <img  src="https://raw.githubusercontent.com/10Fred10/Questn/master/readme-assets/used.png">
</p>

- [Node.Js](https://nodejs.org/) An open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
- [Express.Js](https://expressjs.com/) : The go-to web application framework for Node.js.
- [MongoDb](https://www.mongodb.com/) : Cross-platform document-oriented database program, classified as a NoSQL and uses JSON-like documents with schema.
- [JWT](https://jwt.io/) : _Json Web Token_ | A JSON-based open standard for securing the API routes with verifiable claims.
- [OpenAPI](https://swagger.io) : _(Swagger Specification)_ | , A specification for describing, producing, consuming, and visualizing RESTful web services.

<!-- GETTING STARTED -->

## Install & Config

1. Download or clone the repository.
2. ADD to your Root a `config` folder with a `key.js` file containing your MongoDb URI.

```javascript
module.exports = {
  mongoURI: "mongodb+srv://INSERT YOUR URI HERE",
  secretOrKey: "ADD A SECRET KEY HERE"
};
```

.
├── ...
├── config # config folder
│ ├── keys.js # contains your secret keys and DB connexion URI
└── ...

3.  Install dependencies `npm install (with no args, in package dir)`

<!-- USAGE EXAMPLES -->

## Usage

Start the server by running `nodemon start server`

<p align="center">
  <img  src="https://raw.githubusercontent.com/10Fred10/Questn/master/readme-assets/start-server.png">
</p>

With the help of **POSTMAN** you can check your routes and make API calls.

<p align = "center">
  <img  src="https://raw.githubusercontent.com/10Fred10/Questn/master/readme-assets/postman-logo.png">
</p>

<p align = "center">
  <img  src="https://raw.githubusercontent.com/10Fred10/Questn/master/readme-assets/postman.png">
</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url] [![Gmail][gmail-shield]][gmail-url]

<!-- LICENCE -->

## License

Distributed under the MIT License. See [![MIT License][license-shield]][license-url] for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- :octocat: [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) | Emojies
- :key: [Img Shields](https://shields.io) | Shields

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=flat-square&logo=linkedin
[linkedin-url]: https://linkedin.com/in/fredhm
[gmail-shield]: https://img.shields.io/badge/Gmail-red.svg?style=flat-square&logo=gmail&logoColor=white
[gmail-url]: mailto:contact.hammami.fredj@gmail.com
[behance-shield]: https://img.shields.io/badge/Behance-blue.svg?style=flat-square&logo=behance&logoColor=white
[behance-url]: https://www.behance.net/fredhm
[license-shield]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
