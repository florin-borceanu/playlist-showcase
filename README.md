# Playlist showcase

### Used technologies:
- [Nx workspace](https://nx.dev/)
- [Angular 13](https://angular.io/)
- [NgRx](https://ngrx.io/)
- [RxJs](https://rxjs.dev/)
- [ngx-translate](https://github.com/ngx-translate/core)
- [ESlint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [husky](https://www.npmjs.com/package/husky)

### Project architecture
- Modular [push based architecture](https://thomasburlesonia.medium.com/push-based-architectures-with-rxjs-81b327d7c32d)

### Highlights
- Fully customizable runtime dark theme (easily extendable to multiple themes)
- Facade pattern over the NgRx (in order to decouple data-access modules from the rest of the application)
- Multiple languages support (English by default)
- Complex stylelint
- Default nx ESList with additional rules (such as alphabetical order of the imports)
- Mocked, persistent login
- Clean architecture
- Fully responsive
- Autofixing linting / stylelinting errors at commit

### Future improvements
- Extending the `SharedModule` with multiple common components (such as button, tooltip)
- Design improvements 
- Individual playlist details page
- Polish the playlist list layout
- Increase accessibility of the app (the first level is easily achievable)
- Add [commitizen](https://github.com/commitizen/cz-cli)
- Adding the utils for unit tests (such as page/wrapper pattern, CommonTestModule)
- Unit testing
