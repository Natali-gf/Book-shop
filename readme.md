## Online book store

* TECHNICAL REQUIREMENTS

+ The bookstore should be implemented according to the SPA principle.
That is, all user actions: loading books, switching categories - occur without reloading the page.

+ JS files in the project should be divided into modules (ES6), the file structure should be logical and understandable.

+ To create a project you must use npm. There should be package.json and package-lock.json files in the project folder. In package.json you need to add the npm run build script, which will start building the project.

The project must use at least 2 more development optimization tools (in addition to npm and Webpack), which you went through in previous modules. You can choose any from the list:
+ BEM methodology;
+ CSS preprocessor Sass (or equivalent);
Template engine pug or similar;
+ Webpack Dev Server;
+ Linter.

+ Webpack must be connected to the project.
If you run the project build, the following result is expected:
+ the build completes successfully and without errors;
+ CSS files are also part of the assembly;
+ CSS is included in a separate file, not in the <style> tag;
+ JS and CSS files are minified during the build process.


* REQUIREMENTS FOR LAYOUT AND CSS

1. + The layout must match the layout. It is not necessary to achieve Pixel-Perfect compliance, but the main points must be observed:
+ color range,
+ fonts,
+ sizes,
+ indents.

2. + The application must be displayed correctly at various resolutions. Unfortunately, there is no design for the mobile version in the layout, so try to implement it yourself.
You don't need to come up with a complex design, you just need to rearrange the elements so that they fit on the small screen.

3. + The application must contain sections <header>, <main> and <nav>. Links must be written in an <a> tag, buttons must be implemented with a <button> element, and so on. Don’t forget also about the required alt attribute for images.

4. + When you hover over any clickable elements, cursor: pointer should appear.
Follow semantic layout.

5. + You cannot use tag and id selectors to set styles. Use classes.