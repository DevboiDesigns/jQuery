# jQuery

# Setup

- embed jQuery

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

- [Download](https://jquery.com/download/) (can avoid relying on internet)

## Check if installed

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- jQuery Embed -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <title>Document</title>
  </head>
  <body>
    Hello World

    <script type="text/javascript">
      if (typeof jQuery == "undefined") {
        alert("jQuery is not installed");
      } else {
        alert("jQuery is installed");
      }
    </script>
  </body>
</html>
```

# Accessing an element

- by ID

```js
$("#circle");
```

- by Class

```js
$(".square");
```

- all types

```js
$("div");
```

# Interacting with elements

- clicking

```js
$("#circle").click(function () {
  alert("Was clicked");
});
```

* hovering

```js
$("#circle").hover(function () {
    alert($("p").html());
  });
```

- change HTML

```html
<p>This is some text</p>
```

```js
$("#circle").click(function () {
  $("p").html("This is some new text");
});
```

- get HTML and present

```js
$("#circle").click(function () {
  alert($("p").html());
});
```

* change tags in elements

**Key-Value pair: `src` can be any attribute**

```js
$("iframe").attr(
    "src",
    "https://devboidesigns.github.io/Namid-Wolf_Site/"
  );
```
