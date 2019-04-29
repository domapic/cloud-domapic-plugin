# Cloud Domapic Plugin

> Domapic Plugin that connects Domapic Controller with [Domapic Cloud service][domapic-cloud-url], making possible to control it remotely through the online app.

[![Build status][travisci-image]][travisci-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Quality Gate][quality-gate-image]][quality-gate-url] [![js-standard-style][standard-image]][standard-url]

[![NPM dependencies][npm-dependencies-image]][npm-dependencies-url] [![Last commit][last-commit-image]][last-commit-url] <!--[![Last release][release-image]][release-url] -->

[![NPM downloads][npm-downloads-image]][npm-downloads-url] [![License][license-image]][license-url]

## Intro

The Cloud Domapic Plugin sends information about your Controller current public IP to the Domapic Cloud Service and maintains it up to date. It also retrieves information about your registered users, allowing them to login through the online app using Google Oauth.

It does not send passwords or any other sensible information about Controller users. It creates a new api key token for each registered user, and send this one among with the user email. Users can register by their self in the Domapic Cloud Service or sign in using Google Oauth, and then the Controller will appear in their list of authorized Servers. The specific permissions for the user in the Controller will be kept.

Once your Controller is synced with the Domapic Cloud Service using this plugin, each time you add a new user he will receive an email notification from Domapic Cloud, informing him about how to access.

[coveralls-image]: https://coveralls.io/repos/github/domapic/cloud-domapic-plugin/badge.svg
[coveralls-url]: https://coveralls.io/github/domapic/cloud-domapic-plugin
[travisci-image]: https://travis-ci.com/domapic/cloud-domapic-plugin.svg?branch=master
[travisci-url]: https://travis-ci.com/domapic/cloud-domapic-plugin
[last-commit-image]: https://img.shields.io/github/last-commit/domapic/cloud-domapic-plugin.svg
[last-commit-url]: https://github.com/domapic/cloud-domapic-plugin/commits
[license-image]: https://img.shields.io/npm/l/cloud-domapic-plugin.svg
[license-url]: https://github.com/domapic/cloud-domapic-plugin/blob/master/LICENSE
[npm-downloads-image]: https://img.shields.io/npm/dm/cloud-domapic-plugin.svg
[npm-downloads-url]: https://www.npmjs.com/package/cloud-domapic-plugin
[npm-dependencies-image]: https://img.shields.io/david/domapic/cloud-domapic-plugin.svg
[npm-dependencies-url]: https://david-dm.org/domapic/cloud-domapic-plugin
[quality-gate-image]: https://sonarcloud.io/api/project_badges/measure?project=cloud-domapic-plugin&metric=alert_status
[quality-gate-url]: https://sonarcloud.io/dashboard?id=cloud-domapic-plugin
[release-image]: https://img.shields.io/github/release-date/domapic/cloud-domapic-plugin.svg
[release-url]: https://github.com/domapic/cloud-domapic-plugin/releases
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/

[domapic-cloud-url]: https://domapic.herokuapp.com/
