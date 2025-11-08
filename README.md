# IPLogger!
### Description: 
Data analysis project that provides the possibility of capturing user information IP through a LINK (to collect data), and processing it in graphical way. This app has a few options to configure it.

### Features adn Technologies:
* Laravel 9 + VueJS 3 + TailwindCSS
* Single-page app using InertiaJS
* AWS EC2 R53
* Excel import and export
* Short URL

### Preview:
<p> <img src="https://kuronneko.github.io/assets/img/portfolioip2.png" width="450"> </p>

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

# IPLogger

A lightweight web application to capture IP-related data via a short link and visualize that information in a dashboard. It includes import/export capabilities, short URL generation, graphs and basic analytics.

## Preview

<p> <img src="https://kuronneko.github.io/assets/img/portfolioip2.png" width="450"> </p>

## Minimum requirements

- PHP 8.0.2 or higher
- Composer 2+
- Node.js 16+ and npm (or yarn)
- A supported database: MySQL 8+, MariaDB 10.4+, or PostgreSQL 12+
- Redis (optional, recommended for queues/cache)
- For Docker/Sail: Docker Engine and Docker Compose v2+

## Features

- Built with Laravel 9, Vue 3, TailwindCSS and Inertia
- Short URL generation to collect visitor IP and metadata
- Dashboard with graphs and analytics for collected logs
- Excel import and export (CSV/XLSX)
- User management (register/login) and settings panel
- Storage handling for uploaded assets and exports

## Installation (normal / non-Docker)

1. Clone the repository and enter the project directory:

    git clone <repo-url> iplogger
    cd iplogger

2. Install PHP dependencies:

    composer install

3. Copy environment and set keys:

    cp .env.example .env
    php artisan key:generate

4. Configure your `.env` (database, mail, app URL, etc.). See the Configuration section below.

5. Run migrations and seeders:

    php artisan migrate --seed

6. Install frontend dependencies and build assets:

    npm install
    npm run build   # or `npm run dev` for local development (hot reload)

7. Create storage symlink:

    php artisan storage:link

8. Serve the app locally:

    php artisan serve

The site should now be reachable at the URL configured in your `.env` (default `http://127.0.0.1:8000`).

## Installation with Docker (Laravel Sail)

If you prefer Docker, Laravel Sail provides a simple local Docker environment.

1. Ensure Docker and Docker Compose are installed and running.

2. From the project root, install PHP dependencies first (or run composer inside Sail):

    composer install

3. Require Sail (if not already present) and install the Sail stack (one-time):

    composer require laravel/sail --dev
    php artisan sail:install --with=mysql,redis,meilisearch  # choose services as needed

4. Copy the environment and tweak values if needed:

    cp .env.example .env

5. Start Sail containers:

    ./vendor/bin/sail up -d

6. Run setup commands inside Sail:

    ./vendor/bin/sail composer install
    ./vendor/bin/sail artisan key:generate
    ./vendor/bin/sail artisan migrate --seed
    ./vendor/bin/sail artisan storage:link
    ./vendor/bin/sail npm install
    ./vendor/bin/sail npm run build

7. (Optional) Rebuild images without cache:

    ./vendor/bin/sail build --no-cache

Your app will be available at the host/port configured by Sail (commonly `http://localhost`).

## Configuration

Edit `.env` to set the following at minimum:

- APP_NAME, APP_ENV, APP_URL
- DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD
- MAIL settings for password reset / notifications
- QUEUE_CONNECTION (database/redis) if you enable queued jobs

## Common commands

- Run migrations: `php artisan migrate`
- Seed database: `php artisan db:seed` or `php artisan migrate --seed`
- Run queued jobs (local): `php artisan queue:work`
- Run tests: `php artisan test` or `vendor/bin/phpunit`

When using Sail prefix commands with `./vendor/bin/sail`.

## How to use (brief)

- Register an account via the web UI.
- In the Settings panel you can find or create the short URL used to collect visitor IPs.
- Visit/click the short URL to generate logs; logs are viewable in the Logger section.
- Use the Graphs section to view visual reports of collected data.
- Import/export logs via the provided Excel import/export tools in the UI.

## Troubleshooting

- If migrations fail, verify DB credentials in `.env` and that DB service is running.
- If assets don't load, run `npm run build` (or `npm run dev`) and ensure `public/build` is present.
- For Sail, check `./vendor/bin/sail logs` and `./vendor/bin/sail ps` for container status.

## Contributing

If you'd like to contribute, please open an issue or submit a pull request. Include tests for any new functionality when possible.

## License

This project does not include a license file in the repo. Add a `LICENSE` file if you want to clarify usage rights.
