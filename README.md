## Material Components สำหรับ Angular2

- jspm
- materialize-css
- angular2-materialize

## Config.js

สร้าง package 'materialize'

```json
packages: {
    "materialize": {
        "main": "dist/js/materialize"
    }
},
```

Map `materialize` ไปยัง Version ที่ตั้งตั้ง

```json
map: {
  "@angular/core": "npm:@angular/core@2.0.0-rc.1",
  "angular2": "npm:angular2@2.0.0-beta.17",
  "crypto": "github:jspm/nodelibs-crypto@0.1.0",
  "es6-shim": "github:es-shims/es6-shim@0.35.1",
  "materialize": "npm:materialize-css@0.97.6"
  ...
}
```