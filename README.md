<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Kuro.IPLogger!
### Description: 
Data analysis project that provides the possibility of capturing user information IP through a LINK (to collect data), and processing it in graphical way. This app has a few options to configure it.

### Features adn Technologies:
* Laravel 9 + VueJS 3 + TailwindCSS
* Single-page app using InertiaJS
* AWS EC2 R53
* Excel import and export
* Short URL

### Preview:
<p> <img src="https://kuronneko.github.io/assets/img/portfolioip.png" width="450"> </p>

### How to install [Docker]

    cp .env.example .env
    composer install
    php artisan sail:install
    0,3,5,7
    ./vendor/bin/sail up
    ./vendor/bin/sail php artisan key:generate
    ./vendor/bin/sail php artisan storage:link
    ./vendor/bin/sail php artisan migrate:refresh --seed
    ./vendor/bin/sail build --no-cache (REBUILD IMAGE) (OPTIONAL)

### How to use

Account Creation:

* Visit the website and locate the option to create an account.
* Click on the "Create Account" or similar button.
* Fill out the required information such as username, email, and password.
* Once your account is created, you should be able to log in with your credentials.

Settings Section:

* After logging in, navigate to the settings section of the panel.
* Here, you can find various options related to your account settings.
* Look for the option that provides the URL to access user information IP.
* Click on the provided link or copy it for future reference.
* This URL will allow you to access information about your IP address or other related details.

Logger Section:

* In the panel or dashboard, locate the "Logger" section.
* Click on this section to access your logs.
* Here, you can view a chronological list of all events logged by URL.
* Logs may include actions such as user information IP.

Graphs Section:

* Find the "Graphs" section within the panel or dashboard.
* Click on this section to access graphical representations of data.
