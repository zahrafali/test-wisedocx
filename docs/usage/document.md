# Document

> The `Document` object is the starting point of your `.docx` journey, this is the literal Word Document. You add all your content such as `Paragraphs` to this `Document`, and at the end export it however you like.

To create a new document, it is very easy:

```js
const doc = new docx.Document();
```

## Document properties

You can add properties to the Word document by specifying options, for example:

```js
const doc = new docx.Document({
    creator: "Dolan Miu",
    description: "My extremely interesting document",
    title: "My Document",
});
```

### Full list of options:


* creator
* description
* title
* subject
* keywords
* lastModifiedBy
* revision

You can mix and match whatever properties you want, or provide no properties.

### units for positioning

Various parts of the API require positioning arguments. The units are "20ths of a point" from the [OOXML](http://officeopenxml.com/index.php) specification.
See [Lars Corneliussen's blog post](https://startbigthinksmall.wordpress.com/2010/01/04/points-inches-and-emus-measuring-units-in-office-open-xml/) for more information and how to convert units.