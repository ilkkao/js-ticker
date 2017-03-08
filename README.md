# JS-ticker

Opionated news ticker component.

### Demo:

[Demo](https://ilkkao.github.io/js-ticker/)

### Usage:

```
<html>
    <head>
        <style>
            body {
                padding: 0;
                margin: 0;
            }
        </style>
        <script src="https://cdn.rawgit.com/ilkkao/js-ticker/077ba180e217166932cf6354e8cd89fde742a78e/dist/js-ticker.js"></script>
    </head>
    <body>
        <script>
            const scroller = new Scroller('TO BOLDLY GO WHERE NO MAN HAS GONE BEFORE...');
        </script>
    </body>
</html>
```

### API

#### new Scroller(text)

`text` Text to scroll

### scroller.delete()

Remove scroller from the page
