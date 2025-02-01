# Portfolio Website

This is a simple portfolio website created using HTML and SCSS. It showcases projects and skills in a clean and responsive layout.

## Project Structure

```
portfolio-website
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   ├── main.scss     # Main SCSS stylesheet
│   │   └── _variables.scss # SCSS variables for consistent styling
├── dist
│   ├── css
│   │   └── main.css      # Compiled CSS output
├── package.json          # npm configuration file
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile SCSS to CSS:
   ```
   npm run build
   ```

4. Open `src/index.html` in your browser to view the portfolio.

## Usage Guidelines

- Modify the `src/index.html` file to update the content of your portfolio.
- Use `src/styles/_variables.scss` to define and manage your styling variables.
- Make changes to `src/styles/main.scss` to customize the styles of your portfolio.

## License

This project is open-source and available under the MIT License.