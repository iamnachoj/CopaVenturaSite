# Copa Ventura Website - README

This README document provides an overview of the Copa Ventura website project. It includes information about the folder structure, SCSS architecture, and instructions on how to run the project.

## Folder Structure

The project follows the following folder structure:

```
copaventurasite/
  ├── CSS/
  ├── img/
  ├── sass/
  │    ├── abstracts/
  │    ├── base/
  │    ├── components/
  │    ├── layout/
  │    ├── pages/
  │    └── main.scss
  ├── index.html
  ├── package.json
  └── package-lock.json
```

- `CSS/`: Contains the compiled CSS files.
- `img/`: Holds all the image assets used in the website.
- `sass/`: Contains the SCSS source files organized into different directories:
  - `abstracts/`: Contains SCSS files for functions, mixins, and variables.
  - `base/`: Includes SCSS files for animations, base styles, typography, and utilities.
  - `components/`: Contains SCSS files for individual components of the website.
  - `layout/`: Includes SCSS files for different layout elements (e.g., header, grid, footer, navigation).
  - `pages/`: Contains SCSS files for page-specific styles.
  - `main.scss`: The main SCSS file that imports all the other SCSS partials in the correct order.

- `index.html`: The HTML file that represents the website's content structure.
- `package.json` and `package-lock.json`: Contains information about the project and its dependencies.

## SCSS Architecture

The SCSS files are organized using the 7-1 pattern. This means that styles are split into seven different directories, and each directory contains one specific type of SCSS file. The 7 directories are as follows:

1. `abstracts/`: Contains SCSS files for reusable functions, mixins, and variables.
2. `base/`: Includes SCSS files for base styles like global resets, typography, animations, and utility classes.
3. `components/`: Contains SCSS files for styling individual components used throughout the website.
4. `layout/`: Holds SCSS files for layout-related styles such as header, footer, grid, and navigation.
5. `pages/`: Contains SCSS files specific to each page of the website.
6. `vendors/`: Reserved for third-party CSS libraries if used in the project (not present in this project).
7. `main.scss`: The main SCSS file that imports all the other SCSS partials in the correct order to generate the final CSS.

## How to Run the Project

To compile the SCSS files into CSS, you'll need Node.js and npm (Node Package Manager) installed on your machine.

1. Install dependencies: Open a terminal in the root folder of the project and run the following command to install the required Node.js packages:

```
npm install
```

2. Compile SCSS: After installing the dependencies, run the following command to compile the SCSS files into CSS:

```
npm run compile:sass
```

This command will watch for changes in the SCSS files and automatically recompile them into CSS whenever you save changes to any SCSS file.

3. Open the website: Now that the SCSS has been compiled into CSS, you can open the `index.html` file in your web browser to view the Copa Ventura website.

Please note that this project assumes you have an internet connection to access the Google Fonts and icon font resources.

## Conclusion

The Copa Ventura website project is organized using a clear folder structure and follows the 7-1 pattern for SCSS architecture. By following the instructions above, you can easily compile the SCSS files into CSS and view the website in your web browser. Happy coding!
