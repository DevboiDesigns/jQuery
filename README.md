# jQuery & AJAX

- [jQuery Docs](https://api.jquery.com)
- [AJAX Docs](https://api.jquery.com/category/ajax/)

## AJAX

- access content and interact without refreshing view
- cant use with local files

# Setup

- embed jQuery

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

- [Download](https://jquery.com/download/) (can avoid relying on internet or changes to api)

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
      if (typeof jQuery == 'undefined') {
        alert('jQuery is not installed');
      } else {
        alert('jQuery is installed');
      }
    </script>
  </body>
</html>
```

# Accessing an element

- by ID

```js
$('#circle');
```

- by Class

```js
$('.square');
```

- all types

```js
$('div');
```

- this (element selected)

```js
$('div').click(function () {
  $(this).css('display', 'none');
});
```

# Interacting with elements

- clicking

```js
$('#circle').click(function () {
  alert('Was clicked');
});
```

- hovering

```js
$('#circle').hover(function () {
  alert($('p').html());
});
```

- change HTML

```html
<p>This is some text</p>
```

```js
$('#circle').click(function () {
  $('p').html('This is some new text');
});
```

- get HTML and present

```js
$('#circle').click(function () {
  alert($('p').html());
});
```

- change tags in elements

**Key-Value pair: `src` can be any attribute**

```js
$('iframe').attr('src', 'https://devboidesigns.github.io/Namid-Wolf_Site/');
```

- changing CSS

```js
$('#circle').click(function () {
  $('#circle').css('width', '400px');
});
```

**access attributes**

```js
$('#circle').click(function () {
  alert($('body').css('width'));
});
```

- fade [Docs](https://api.jquery.com/fadeout/)

```js
$('div').click(function () {
  $(this).fadeOut();
});
```

**fade with method**

```js
$('div').click(function () {
  $(this).fadeOut('slow', function () {
    $('p').html('This is ' + $(this).attr('name') + ' left the page');
  });
});
```

- hide

```js
$('div').click(function () {
  $(this).hide();
});
```

# Logic

## Basic

```html
<div name="circle" id="circle"></div>
```

```js
$('div').click(function () {
  if ($(this).attr('id') === 'circle') {
    alert('You clicked on a ' + $(this).attr('name'));
  } else {
    alert('You clicked a square');
  }
});
```

## Fade in text

```css
.hidden {
  display: none;
}
```

```html
<body>
  <p id="hidden-text" class="hidden">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quis debitis
    unde facere, provident, repellendus esse eveniet error numquam laudantium
    est ex in adipisci perferendis eius aliquam similique nobis ea.
  </p>

  <button id="fadeIn" type="button">Fade in</button>
  <button id="fadeOut" type="button">Fade out</button>

  <!-- jQuery -->
  <script>
    $('#fadeIn').click(function () {
      $('#hidden-text').fadeIn();
    });

    $('#fadeOut').click(function () {
      $('#hidden-text').fadeOut();
    });
  </script>
</body>
```

- Toggle fade

```js
$('#toggle').click(function () {
  $('#text').fadeToggle();
});
```

## Animate

- 1 argu: css properties to animate
- 2 argu: duration in milliseconds
- naming convention is js (margin-left becomes marginLeft)

```js
$('.circle').click(function () {
  $('.circle').animate(
    {
      width: '400px',
      height: '400px',
      marginLeft: '1000px',
    },
    2000
  );
});
```

- with call back function

```js
$('.circle').click(function () {
  $('.circle').animate(
    {
      width: '400px',
      height: '400px',
      marginLeft: '1000px',
    },
    1000,
    function () {
      $('.circle').css('background-color', 'red');
    }
  );
});
```

# AJAX

## get file

- basic

```js
// get content of file
$.get('info.txt', function (data) {
  alert(data);
});
```

- advanced with error handling

```js
$.ajax('info.txt')
  .done(function (data) {
    alert(data);
  })
  .fail(function () {
    alert('sorry check your internet');
  });
```

- example

```js
$.ajax('info.txt')
  .done(function (data) {
    $('#text').html(data);
  })
  .fail(function () {
    alert('sorry check your internet');
  });
```

# REGEX - Regular Expressions

- check if is date
- check if has letter
- check if email
- check if password is complicated enough
- validate

## Syntax

- `var regex = /is/` `/is/` syntax to check if available/ exists
- `var string = 'Regex is great!'`

**basic setup**

```js
var regex = /is/;
var string = 'Regex is great!';

var result = string.match(regex);
alert(result); // returns what it finds: 'is'
```

**case insensitive**

```js
var regex = /Great/i;
var string = 'Regex is great!';

var result = string.match(regex);
alert(result); // returns what it finds: 'great'
```

**global**

_returns how many times present_

```js
var regex = /e/g;
var string = 'Regex is great!';

var result = string.match(regex);
alert(result); // returns what it finds: array of 'e,e,e'
```

## Validate Email

```js
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
  return regex.test(email);
}
```

# jQuery UI

- [jQueryUI Docs](https://jqueryui.com)

* [Download](https://jqueryui.com)

_add folder to project and point index.html at below folders_

_make sure location of folder in `src` & `href` are your local files_

```html
<!-- Embed Jquery UI -->
<link rel="stylesheet" href="./jquery-ui/jquery-ui.css" />
<!-- jQuery UI script -->
<script src="./jquery-ui/jquery-ui.js"></script>
```

## Draggable

**similar setup for them all**

```html
<body>
  <div id="draggable">
    <p>Drag me around</p>
  </div>
</body>
<script>
  $(function () {
    $('#draggable').draggable();
  });
</script>
```

- dragable attributes

```js
$(function () {
  $('#draggable').draggable({ axis: 'y' });
});
```

- containment

```html
<body>
  <div class="container">
    <span id="text">Drag me around</span>
  </div>
</body>
<script>
  $(function () {
    $('#text').draggable({ containment: 'parent' });
  });
</script>
```

- with call back logic

```js
 <body>
    <div class="container">
      <span id="text">Drag me around</span>
    </div>
  </body>
  <script>
    $(function () {
      $('#text').draggable({ containment: 'parent' });
    });
    $(function () {
      $('.container').resizable({
        grid: 50,
        resize: function (event, ui) {
          const width = $('.container').width();
          if (width > 300) {
            alert(`The width is ${width}`);
          }
        },
      });
    });
  </script>
```
