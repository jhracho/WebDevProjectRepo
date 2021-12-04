# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.4.0] - 2021-12-04
### Added
- deploy.sh script that runs on Droplet
- nginx config file

### Changed
- Various bug fixes and syntax changes to remove console errors

## [0.3.4] - 2021-12-02
### Changed
- Post page correctly stretches to fit text of any length

### Removed
- Writer nomination form on home page

## [0.3.4] - 2021-11-30
### Added
- Edit page allows users to edit existing posts
- Author pages display public-facing information about each author (route: /author/:displayname)
- Profile page allows user to edit private login information and public author information
- New authors can be created on profile page

### Changed
- Create page redirects to author creation on profile if no authors exist
- After successful post creation, user is redirected to page of their post
- Clicking on the like or dislike buttons on a post changes their number of likes/dislikes

### Removed
- Explore page has been removed


## [0.3.3] - 2021-11-24
### Added
- Post page allows users to view full text and like/dislike count of any post

### Changed
- Post title (on homepage) is now link to full Post page


## [0.3.0] - 2021-11-10
### Added
- NavBar hides Log In and Sign Up when authenticated
- NavBar hides Log Out when not authenticated

### Changed
- Users can no longer view "Create Post" page if not authenticated
- Users can no longer navigate to Log In and Sign Up forms if authenticated

## [0.2.2] - 2021-11-09
### Added
- Users can Log In to the site

### Changed 
- Log In and Sign Up form both pull from AuthForm.js with flags

## [0.2.1] - 2021-11-05
### Added
- Users can create new accounts 

## [0.2.0] - 2021-10-27
### Added
- Props, props, props!
- Parse models representing classes
- Routing between modules
- Formally created this changelog

### Changed 
- Writer of the month is now a random author with each refresh 

## [0.1.5] - 2021-10-25
### Added
- Parse support
- Back4App Backend and NoSQL database

## [0.1.0] - 2021-10-18
### Added
- Site fully converted to React

### Fixed
- Routing completed between all pages
- Heading lines re-aligned
 
## [0.0.3] - 2021-10-17
### Added
- Feature 3 Code completed: Preact, Axios, etc.
