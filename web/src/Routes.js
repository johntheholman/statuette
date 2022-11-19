// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BasicLayout from 'src/layouts/BasicLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BasicLayout}>
        <Route path="/review" page={ReviewPage} name="review" />
        <Route path="/nominees" page={NomineesPage} name="nominees" />
        <Route path="/categories" page={CategoriesPage} name="categories" />
        <Route path="/rules" page={RulesPage} name="rules" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
