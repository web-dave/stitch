# Update to V12
ng update @angular/core @angular/cli

## Add es-lint
ng add @angular-eslint/schematics

## Switch to es-lint
(wenn ts-lint exists)
    ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config