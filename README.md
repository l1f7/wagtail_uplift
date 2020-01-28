# Wagtail Uplift
Custom skin for Wagtail Admin

## Usage

1. `pip install wagtail-uplift` or `pip install git+https://github.com/l1f7/wagtail_uplift.git#egg=wagtail_uplift`
2. Add `'wagtail_uplift'` to your `INSTALLED_APPS`.

It should work with most versions of Wagtail, including the latest.

## Development
**Requires: Docker**

1. `git clone https://github.com/l1f7/wagtail_uplift.git` into a wagtail project with the other apps.
2. `make build && make up && make enter` - Build, start, and enter Docker container.
3. `npm run dev` - Run `gulp` build tools.
4. Add `wagtail_uplift.wagtail_uplift`, to INSTALLED_APPS. This will specify the inner files, so the css can be run

