(self.webpackChunk_zamudio_fabian_storyv2=self.webpackChunk_zamudio_fabian_storyv2||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var angular=__webpack_require__("./node_modules/@storybook/addon-docs/angular/index.js");const documentation_namespaceObject=JSON.parse('{"pipes":[],"interfaces":[],"injectables":[],"guards":[],"interceptors":[],"classes":[],"directives":[],"components":[{"name":"AppComponent","id":"component-AppComponent-15382b5a0fbf6dcd3c548cc8ce1e9b795a8f21298493ba7521c550343cea88d75e56cfc0d324acc67474151da5b7395c24b5df6a6fa4ce11152c2253800c1edb","file":"projects/demoapp/src/app/app.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"app-root","styleUrls":["./app.component.scss"],"styles":[],"templateUrl":["./app.component.html"],"viewProviders":[],"hostDirectives":[],"inputsClass":[],"outputsClass":[],"propertiesClass":[{"name":"title","defaultValue":"\'demoapp\'","deprecated":false,"deprecationMessage":"","type":"string","optional":false,"description":"","line":9}],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":false,"imports":[],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'app-root\',\\n  templateUrl: \'./app.component.html\',\\n  styleUrls: [\'./app.component.scss\']\\n})\\nexport class AppComponent {\\n  title = \'demoapp\';\\n}\\n","assetsDirs":[],"styleUrlsData":[{"data":"","styleUrl":"./app.component.scss"}],"stylesData":"","templateData":"\x3c!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * * The content below * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * Delete the template below * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * to get started with your project! * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * --\x3e\\n\\n<style>\\n  :host {\\n    font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto,\\n      Helvetica, Arial, sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\",\\n      \\"Segoe UI Symbol\\";\\n    font-size: 14px;\\n    color: #333;\\n    box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n  }\\n\\n  h1,\\n  h2,\\n  h3,\\n  h4,\\n  h5,\\n  h6 {\\n    margin: 8px 0;\\n  }\\n\\n  p {\\n    margin: 0;\\n  }\\n\\n  .spacer {\\n    flex: 1;\\n  }\\n\\n  .toolbar {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    height: 60px;\\n    display: flex;\\n    align-items: center;\\n    background-color: #1976d2;\\n    color: white;\\n    font-weight: 600;\\n  }\\n\\n  .toolbar img {\\n    margin: 0 16px;\\n  }\\n\\n  .toolbar #twitter-logo {\\n    height: 40px;\\n    margin: 0 8px;\\n  }\\n\\n  .toolbar #youtube-logo {\\n    height: 40px;\\n    margin: 0 16px;\\n  }\\n\\n  .toolbar #twitter-logo:hover,\\n  .toolbar #youtube-logo:hover {\\n    opacity: 0.8;\\n  }\\n\\n  .content {\\n    display: flex;\\n    margin: 82px auto 32px;\\n    padding: 0 16px;\\n    max-width: 960px;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n\\n  svg.material-icons {\\n    height: 24px;\\n    width: auto;\\n  }\\n\\n  svg.material-icons:not(:last-child) {\\n    margin-right: 8px;\\n  }\\n\\n  .card svg.material-icons path {\\n    fill: #888;\\n  }\\n\\n  .card-container {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    margin-top: 16px;\\n  }\\n\\n  .card {\\n    all: unset;\\n    border-radius: 4px;\\n    border: 1px solid #eee;\\n    background-color: #fafafa;\\n    height: 40px;\\n    width: 200px;\\n    margin: 0 8px 16px;\\n    padding: 16px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    transition: all 0.2s ease-in-out;\\n    line-height: 24px;\\n  }\\n\\n  .card-container .card:not(:last-child) {\\n    margin-right: 0;\\n  }\\n\\n  .card.card-small {\\n    height: 16px;\\n    width: 168px;\\n  }\\n\\n  .card-container .card:not(.highlight-card) {\\n    cursor: pointer;\\n  }\\n\\n  .card-container .card:not(.highlight-card):hover {\\n    transform: translateY(-3px);\\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\\n  }\\n\\n  .card-container .card:not(.highlight-card):hover .material-icons path {\\n    fill: rgb(105, 103, 103);\\n  }\\n\\n  .card.highlight-card {\\n    background-color: #1976d2;\\n    color: white;\\n    font-weight: 600;\\n    border: none;\\n    width: auto;\\n    min-width: 30%;\\n    position: relative;\\n  }\\n\\n  .card.card.highlight-card span {\\n    margin-left: 60px;\\n  }\\n\\n  svg#rocket {\\n    width: 80px;\\n    position: absolute;\\n    left: -10px;\\n    top: -24px;\\n  }\\n\\n  svg#rocket-smoke {\\n    height: calc(100vh - 95px);\\n    position: absolute;\\n    top: 10px;\\n    right: 180px;\\n    z-index: -10;\\n  }\\n\\n  a,\\n  a:visited,\\n  a:hover {\\n    color: #1976d2;\\n    text-decoration: none;\\n  }\\n\\n  a:hover {\\n    color: #125699;\\n  }\\n\\n  .terminal {\\n    position: relative;\\n    width: 80%;\\n    max-width: 600px;\\n    border-radius: 6px;\\n    padding-top: 45px;\\n    margin-top: 8px;\\n    overflow: hidden;\\n    background-color: rgb(15, 15, 16);\\n  }\\n\\n  .terminal::before {\\n    content: \\"\\\\2022 \\\\2022 \\\\2022\\";\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    height: 4px;\\n    background: rgb(58, 58, 58);\\n    color: #c2c3c4;\\n    width: 100%;\\n    font-size: 2rem;\\n    line-height: 0;\\n    padding: 14px 0;\\n    text-indent: 4px;\\n  }\\n\\n  .terminal pre {\\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\\n    color: white;\\n    padding: 0 1rem 1rem;\\n    margin: 0;\\n  }\\n\\n  .circle-link {\\n    height: 40px;\\n    width: 40px;\\n    border-radius: 40px;\\n    margin: 8px;\\n    background-color: white;\\n    border: 1px solid #eeeeee;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    transition: 1s ease-out;\\n  }\\n\\n  .circle-link:hover {\\n    transform: translateY(-0.25rem);\\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\\n  }\\n\\n  footer {\\n    margin-top: 8px;\\n    display: flex;\\n    align-items: center;\\n    line-height: 20px;\\n  }\\n\\n  footer a {\\n    display: flex;\\n    align-items: center;\\n  }\\n\\n  .github-star-badge {\\n    color: #24292e;\\n    display: flex;\\n    align-items: center;\\n    font-size: 12px;\\n    padding: 3px 10px;\\n    border: 1px solid rgba(27, 31, 35, 0.2);\\n    border-radius: 3px;\\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\\n    margin-left: 4px;\\n    font-weight: 600;\\n  }\\n\\n  .github-star-badge:hover {\\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\\n    border-color: rgba(27, 31, 35, 0.35);\\n    background-position: -0.5em;\\n  }\\n\\n  .github-star-badge .material-icons {\\n    height: 16px;\\n    width: 16px;\\n    margin-right: 4px;\\n  }\\n\\n  svg#clouds {\\n    position: fixed;\\n    bottom: -160px;\\n    left: -230px;\\n    z-index: -10;\\n    width: 1920px;\\n  }\\n\\n  /* Responsive Styles */\\n  @media screen and (max-width: 767px) {\\n    .card-container > *:not(.circle-link),\\n    .terminal {\\n      width: 100%;\\n    }\\n\\n    .card:not(.highlight-card) {\\n      height: 16px;\\n      margin: 8px 0;\\n    }\\n\\n    .card.highlight-card span {\\n      margin-left: 72px;\\n    }\\n\\n    svg#rocket-smoke {\\n      right: 120px;\\n      transform: rotate(-5deg);\\n    }\\n  }\\n\\n  @media screen and (max-width: 575px) {\\n    svg#rocket-smoke {\\n      display: none;\\n      visibility: hidden;\\n    }\\n  }\\n</style>\\n\\n\x3c!-- Toolbar --\x3e\\n<div class=\\"toolbar\\" role=\\"banner\\">\\n  <img\\n    width=\\"40\\"\\n    alt=\\"Angular Logo\\"\\n    src=\\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\\"\\n  />\\n  <span>Welcome</span>\\n  <div class=\\"spacer\\"></div>\\n  <a\\n    aria-label=\\"Angular on twitter\\"\\n    target=\\"_blank\\"\\n    rel=\\"noopener\\"\\n    href=\\"https://twitter.com/angular\\"\\n    title=\\"Twitter\\"\\n  >\\n    <svg\\n      id=\\"twitter-logo\\"\\n      height=\\"24\\"\\n      data-name=\\"Logo\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n      viewBox=\\"0 0 400 400\\"\\n    >\\n      <rect width=\\"400\\" height=\\"400\\" fill=\\"none\\" />\\n      <path\\n        d=\\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\\"\\n        fill=\\"#fff\\"\\n      />\\n    </svg>\\n  </a>\\n  <a\\n    aria-label=\\"Angular on YouTube\\"\\n    target=\\"_blank\\"\\n    rel=\\"noopener\\"\\n    href=\\"https://youtube.com/angular\\"\\n    title=\\"YouTube\\"\\n  >\\n    <svg\\n      id=\\"youtube-logo\\"\\n      height=\\"24\\"\\n      width=\\"24\\"\\n      data-name=\\"Logo\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n      viewBox=\\"0 0 24 24\\"\\n      fill=\\"#fff\\"\\n    >\\n      <path d=\\"M0 0h24v24H0V0z\\" fill=\\"none\\" />\\n      <path\\n        d=\\"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z\\"\\n      />\\n    </svg>\\n  </a>\\n</div>\\n\\n<div class=\\"content\\" role=\\"main\\"></div>\\n\\n\x3c!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * * The content above * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * --\x3e\\n\x3c!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * --\x3e\\n\\n<router-outlet></router-outlet>\\n"},{"name":"QrButton","id":"component-QrButton-02633fe0864abf99a524e6bdf7bc2fb934b322a2c9b5f0246dca771ad235956421f6c540300d9cbfd629da8fbc8454b6c91d1fd7c5cedfafdbb8c1d2448dfec6","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"qr-button","styleUrls":["./qr-button.scss"],"styles":[],"templateUrl":["./qr-button.html"],"viewProviders":[],"hostDirectives":[],"inputsClass":[{"name":"backgroundColor","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nWhat background color to use\\n","description":"<p>What background color to use</p>\\n","line":19,"type":"string","decorators":[]},{"name":"label","defaultValue":"\'Button\'","deprecated":false,"deprecationMessage":"","jsdoctags":[{"pos":539,"end":552,"flags":8421376,"modifierFlagsCache":0,"transformFlags":0,"kind":330,"tagName":{"pos":540,"end":548,"flags":8421376,"modifierFlagsCache":0,"transformFlags":0,"kind":79,"escapedText":"required"},"comment":""}],"rawdescription":"\\n\\nButton contents\\n\\n","description":"<p>Button contents</p>\\n","line":33,"type":"string","decorators":[]},{"name":"primary","defaultValue":"false","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nIs this the principal call to action on the page?\\n","description":"<p>Is this the principal call to action on the page?</p>\\n","line":13,"type":"boolean","decorators":[]},{"name":"size","defaultValue":"\'medium\'","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nHow large should the button be?\\n","description":"<p>How large should the button be?</p>\\n","line":25,"type":"\\"small\\" | \\"medium\\" | \\"large\\"","decorators":[]}],"outputsClass":[{"name":"onClick","defaultValue":"new EventEmitter<Event>()","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nOptional click handler\\n","description":"<p>Optional click handler</p>\\n","line":39,"type":"EventEmitter"}],"propertiesClass":[],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":false,"imports":[],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component, Input, Output, EventEmitter } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'qr-button\',\\n  templateUrl: \'./qr-button.html\',\\n  styleUrls: [\'./qr-button.scss\'],\\n})\\nexport class QrButton {\\n  /**\\n   * Is this the principal call to action on the page?\\n   */\\n  @Input()\\n  primary = false;\\n\\n  /**\\n   * What background color to use\\n   */\\n  @Input()\\n  backgroundColor?: string;\\n\\n  /**\\n   * How large should the button be?\\n   */\\n  @Input()\\n  size: \'small\' | \'medium\' | \'large\' = \'medium\';\\n\\n  /**\\n   * Button contents\\n   *\\n   * @required\\n   */\\n  @Input()\\n  label = \'Button\';\\n\\n  /**\\n   * Optional click handler\\n   */\\n  @Output()\\n  onClick = new EventEmitter<Event>();\\n\\n  public get classes(): string[] {\\n    const mode = this.primary ? \'storybook-button--primary\' : \'storybook-button--secondary\';\\n\\n    return [\'storybook-button\', `storybook-button--${this.size}`, mode];\\n  }\\n}\\n","assetsDirs":[],"styleUrlsData":[{"data":".storybook-button {\\n    font-family: \'Nunito Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n    font-weight: 700;\\n    border: 0;\\n    border-radius: 3em;\\n    cursor: pointer;\\n    display: inline-block;\\n    line-height: 1;\\n  }\\n  .storybook-button--primary {\\n    color: white;\\n    background-color: #1ea7fd;\\n  }\\n  .storybook-button--secondary {\\n    color: #333;\\n    background-color: transparent;\\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\\n  }\\n  .storybook-button--small {\\n    font-size: 12px;\\n    padding: 10px 16px;\\n  }\\n  .storybook-button--medium {\\n    font-size: 14px;\\n    padding: 11px 20px;\\n  }\\n  .storybook-button--large {\\n    font-size: 16px;\\n    padding: 12px 24px;\\n  }\\n  ","styleUrl":"./qr-button.scss"}],"stylesData":"","accessors":{"classes":{"name":"classes","getSignature":{"name":"classes","type":"[]","returnType":"string[]","line":41}}},"templateData":"<button\\n  type=\\"button\\"\\n  (click)=\\"onClick.emit($event)\\"\\n  [ngClass]=\\"classes\\"\\n  [ngStyle]=\\"{ \'background-color\': backgroundColor }\\"\\n>\\n  {{ label }} v3\\n</button>\\n"},{"name":"QrButtonCustom","id":"component-QrButtonCustom-aba3d14fdf73b0593ee28ed431914545a9627512bb2a19d3512021b3d6e76c8b78675539272c41285338350e4b4b47d2bd2842ebdf0be82985fc4302f5f031a0","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"qr-button-custom","styleUrls":[],"styles":[],"templateUrl":["./qr-button-custom.html"],"viewProviders":[],"hostDirectives":[],"inputsClass":[],"outputsClass":[],"propertiesClass":[],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":false,"imports":[],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component, Input, Output, EventEmitter } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'qr-button-custom\',\\n  templateUrl: \'./qr-button-custom.html\',\\n  styleUrls: [],\\n})\\nexport class QrButtonCustom {\\n  \\n}\\n","assetsDirs":[],"styleUrlsData":"","stylesData":"","templateData":"<button>ok custom v1</button>\\n"}],"modules":[{"name":"AppModule","id":"module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66","description":"","deprecationMessage":"","deprecated":false,"file":"projects/demoapp/src/app/app.module.ts","methods":[],"sourceCode":"import { NgModule } from \'@angular/core\';\\nimport { BrowserModule } from \'@angular/platform-browser\';\\n\\nimport { AppRoutingModule } from \'./app-routing.module\';\\nimport { AppComponent } from \'./app.component\';\\n\\n@NgModule({\\n  declarations: [\\n    AppComponent\\n  ],\\n  imports: [\\n    BrowserModule,\\n    AppRoutingModule\\n  ],\\n  providers: [],\\n  bootstrap: [AppComponent]\\n})\\nexport class AppModule { }\\n","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[{"name":"AppComponent"}]},{"type":"imports","elements":[{"name":"AppRoutingModule"}]},{"type":"exports","elements":[]},{"type":"bootstrap","elements":[{"name":"AppComponent"}]},{"type":"classes","elements":[]}]},{"name":"AppRoutingModule","id":"module-AppRoutingModule-78922b3ae99d2c5249b333980bd5afde1b120b2cc6fedfd41b8b2cc90f279797cb4b22e183bf7e1d1dfab8c6100e77e7812c110234d81f866f544f28a3e18b15","description":"","deprecationMessage":"","deprecated":false,"file":"projects/demoapp/src/app/app-routing.module.ts","methods":[],"sourceCode":"import { NgModule } from \'@angular/core\';\\nimport { RouterModule, Routes } from \'@angular/router\';\\n\\nconst routes: Routes = [];\\n\\n@NgModule({\\n  imports: [RouterModule.forRoot(routes)],\\n  exports: [RouterModule]\\n})\\nexport class AppRoutingModule { }\\n","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[]},{"type":"imports","elements":[]},{"type":"exports","elements":[]},{"type":"bootstrap","elements":[]},{"type":"classes","elements":[]}]},{"name":"QrUiLibraryModule","id":"module-QrUiLibraryModule-b08bfca5165fcd800b1b19451e3020a9da003297da61c74096756359f240b95f9af1502f71ab2900d18b7574eab424a93a81ac88683461148d722ba773615a15","description":"","deprecationMessage":"","deprecated":false,"file":"projects/components/qr-ui-library/src/lib/qr-ui-library.module.ts","methods":[],"sourceCode":"import { NgModule } from \'@angular/core\';\\nimport { QrButtonCustom } from \'./components/qr-button-custom/qr-button-custom.component\';\\nimport { QrButton } from \'./components/qr-button/qr-button.component\';\\nimport { CommonModule } from \'@angular/common\';\\n\\n\\n\\n@NgModule({\\n  declarations: [\\n    QrButton,\\n    QrButtonCustom\\n  ],\\n  imports: [\\n    CommonModule\\n  ],\\n  exports: [\\n    QrButton,\\n    QrButtonCustom\\n  ]\\n})\\nexport class QrUiLibraryModule { }\\n","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[{"name":"QrButton"},{"name":"QrButtonCustom"}]},{"type":"imports","elements":[]},{"type":"exports","elements":[{"name":"QrButton"},{"name":"QrButtonCustom"}]},{"type":"bootstrap","elements":[]},{"type":"classes","elements":[]}]}],"miscellaneous":{"variables":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n}"},{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<QrButton>","defaultValue":"{\\n  title: \'Example/QrButton\',\\n  component: QrButton,\\n  tags: [\'autodocs\']\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<QrButtonCustom>","defaultValue":"{\\n  title: \'Example/QrButtonCustom\',\\n  component: QrButtonCustom,\\n  tags: [\'autodocs\']\\n}"},{"name":"preview","ctype":"miscellaneous","subtype":"variable","file":".storybook/preview.ts","deprecated":false,"deprecationMessage":"","type":"Preview","defaultValue":"{\\n  parameters: {\\n    actions: { argTypesRegex: \\"^on[A-Z].*\\" },\\n    controls: {\\n      matchers: {\\n        color: /(background|color)$/i,\\n        date: /Date$/,\\n      },\\n    },\\n  },\\n}"}],"functions":[],"typealiases":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<QrButton>","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":180},{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<QrButtonCustom>","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":180}],"enumerations":[],"groupedVariables":{"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<QrButton>","defaultValue":"{\\n  title: \'Example/QrButton\',\\n  component: QrButton,\\n  tags: [\'autodocs\']\\n}"}],"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story","defaultValue":"{\\n}"},{"name":"meta","ctype":"miscellaneous","subtype":"variable","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","deprecated":false,"deprecationMessage":"","type":"Meta<QrButtonCustom>","defaultValue":"{\\n  title: \'Example/QrButtonCustom\',\\n  component: QrButtonCustom,\\n  tags: [\'autodocs\']\\n}"}],".storybook/preview.ts":[{"name":"preview","ctype":"miscellaneous","subtype":"variable","file":".storybook/preview.ts","deprecated":false,"deprecationMessage":"","type":"Preview","defaultValue":"{\\n  parameters: {\\n    actions: { argTypesRegex: \\"^on[A-Z].*\\" },\\n    controls: {\\n      matchers: {\\n        color: /(background|color)$/i,\\n        date: /Date$/,\\n      },\\n    },\\n  },\\n}"}]},"groupedFunctions":{},"groupedEnumerations":{},"groupedTypeAliases":{"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<QrButton>","file":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":180}],"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts":[{"name":"Story","ctype":"miscellaneous","subtype":"typealias","rawtype":"StoryObj<QrButtonCustom>","file":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","deprecated":false,"deprecationMessage":"","description":"","kind":180}]}},"routes":{"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"projects/demoapp/src/app/app-routing.module.ts","module":"AppRoutingModule","children":[],"kind":"module"}]},"coverage":{"count":10,"status":"low","files":[{"filePath":".storybook/preview.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"preview","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.component.ts","type":"component","linktype":"component","name":"QrButtonCustom","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"meta","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.component.ts","type":"component","linktype":"component","name":"QrButton","coveragePercent":83,"coverageCount":"5/6","status":"very-good"},{"filePath":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"meta","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/demoapp/src/app/app.component.ts","type":"component","linktype":"component","name":"AppComponent","coveragePercent":0,"coverageCount":"0/2","status":"low"}]}}');(0,angular.P)(documentation_namespaceObject);const _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels"),asyncToGenerator=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const pipeline=x=>x(),importers=[function(){var _ref=(0,asyncToGenerator.Z)((function*(path){if(!/^\.[\\/](?:projects\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(22);return __webpack_require__("./projects/components lazy recursive ^\\.\\/.*$ include: (?:\\/projects\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)}));return function(_x){return _ref.apply(this,arguments)}}(),function(){var _ref2=(0,asyncToGenerator.Z)((function*(path){if(!/^\.[\\/](?:projects\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(22);return __webpack_require__("./projects/components lazy recursive ^\\.\\/.*$ include: (?:\\/projects\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}));return function(_x2){return _ref2.apply(this,arguments)}}()];function _importFn(){return(_importFn=(0,asyncToGenerator.Z)((function*(path){for(let i=0;i<importers.length;i++){const moduleExports=yield pipeline((()=>importers[i](path)));if(moduleExports)return moduleExports}}))).apply(this,arguments)}const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===dist.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:function importFn(_x3){return _importFn.apply(this,arguments)},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/angular/dist/client/preview-prod.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/docs/config.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/config.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"./projects/demoapp/src/styles.scss?ngGlobalStyle":()=>{},"./projects/components lazy recursive ^\\.\\/.*$ include: (?:\\/projects\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./qr-ui-library/src/lib/components/Introduction.mdx":["./projects/components/qr-ui-library/src/lib/components/Introduction.mdx",657,979]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./projects/components lazy recursive ^\\.\\/.*$ include: (?:\\/projects\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./projects/components lazy recursive ^\\.\\/.*$ include: (?:\\/projects\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories":["./projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts",121],"./qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts":["./projects/components/qr-ui-library/src/lib/components/qr-button-custom/qr-button-custom.stories.ts",121],"./qr-ui-library/src/lib/components/qr-button/qr-button.stories":["./projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts",886],"./qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts":["./projects/components/qr-ui-library/src/lib/components/qr-button/qr-button.stories.ts",886]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./projects/components lazy recursive ^\\.\\/.*$ include: (?:\\/projects\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[645],(()=>(__webpack_exec__("./storybook-config-entry.js"),__webpack_exec__("./node_modules/zone.js/fesm2015/zone.js"),__webpack_exec__("./node_modules/@angular/compiler/fesm2022/compiler.mjs"),__webpack_exec__("./projects/demoapp/src/styles.scss?ngGlobalStyle"))));__webpack_require__.O()}]);