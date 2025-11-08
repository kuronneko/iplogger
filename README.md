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
