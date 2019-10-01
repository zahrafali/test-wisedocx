# Images

To create a `floating` image on top of text:

```ts
doc.createImage(fs.readFileSync("./demo/images/pizza.gif"), 200, 200, {
    floating: {
        horizontalPosition: {
            offset: 1014400,
        },
        verticalPosition: {
            offset: 1014400,
        },
    },
});
```

By default with no arguments, its an `inline` image:

```ts
doc.createImage(fs.readFileSync("./demo/images/parrots.bmp"));
```

You can also create images manually and add them later:

```ts
const image = Media.addImage(doc, fs.readFileSync("./demo/images/pizza.gif"));
doc.addImage(image);
```

## Intro

Adding images can be done in two ways:

1. Call the `createImage` method to add the image directly into the `document`:

    ```js
    doc.createImage([IMAGE_BUFFER], [WIDTH], [HEIGHT], [POSITION_OPTIONS]);
    ```

2. Create an `image` first, then add it into the `document`:

    ```ts
    const image = Media.addImage(doc, [IMAGE_BUFFER]);
    doc.addImage(image);
    ```

`docx` supports `jpeg`, `jpg`, `bmp`, `gif` and `png`

## Positioning

> Positioning is the method on how to place the image on the document

![Word Image Positiong](https://user-images.githubusercontent.com/34742290/41765548-b0946302-7604-11e8-96f9-166a9f0b8f39.png)

Three types of image positioning is supported:

-   Floating
-   Inline

By default, picture are exported as `Inline` elements.

### Usage

Pass `options` into the `[POSITION_OPTIONS]` metioned in the [Intro above](#Intro).

## Floating

To change the position the image to be on top of the text, simply add the `floating` property to the last argument. By default, the offsets are relative to the top left corner of the `page`. Offset units are in [emus](https://startbigthinksmall.wordpress.com/2010/01/04/points-inches-and-emus-measuring-units-in-office-open-xml/):

```ts
const imageData = document.createImage(buffer, 903, 1149, {
    floating: {
        horizontalPosition: {
            offset: 1014400, // relative: HorizontalPositionRelativeFrom.PAGE by default
        },
        verticalPosition: {
            offset: 1014400, // relative: VerticalPositionRelativeFrom.PAGE by default
        },
    },
});
```

```ts
const imageData = document.createImage(buffer, 903, 1149, {
    floating: {
        horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.RIGHT_MARGIN,
            offset: 1014400,
        },
        verticalPosition: {
            relative: VerticalPositionRelativeFrom.BOTTOM_MARGIN,
            offset: 1014400,
        },
    },
});
```

### Options

Full options you can pass into `floating` are:

| Property           | Type                        | Notes    |
| ------------------ | --------------------------- | -------- |
| horizontalPosition | `HorizontalPositionOptions` | Required |
| verticalPosition   | `VerticalPositionOptions`   | Required |
| allowOverlap       | `boolean`                   | Optional |
| lockAnchor         | `boolean`                   | Optional |
| behindDocument     | `boolean`                   | Optional |
| layoutInCell       | `boolean`                   | Optional |

`HorizontalPositionOptions` are:

| Property | Type                             | Notes                                             | Possible Values                                                                                           |
| -------- | -------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| relative | `HorizontalPositionRelativeFrom` | Required                                          | `CHARACTER`, `COLUMN`, `INSIDE_MARGIN`, `LEFT_MARGIN`, `MARGIN`, `OUTSIDE_MARGIN`, `PAGE`, `RIGHT_MARGIN` |
| align    | `HorizontalPositionAlign`        | You can either have `align` or `offset`, not both | `CENTER`, `INSIDE`, `LEFT`, `OUTSIDE`, `RIGHT`                                                            |
| offset   | `number`                         | You can either have `align` or `offset`, not both | `0` to `Infinity`                                                                                         |

`VerticalPositionOptions` are:

| Property | Type                           | Notes                                             | Possible Values                                                                                         |
| -------- | ------------------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| relative | `VerticalPositionRelativeFrom` | Required                                          | `BOTTOM_MARGIN`, `INSIDE_MARGIN`, `LINE`, `MARGIN`, `OUTSIDE_MARGIN`, `PAGE`, `PARAGRAPH`, `TOP_MARGIN` |
| align    | `VerticalPositionAlign`        | You can either have `align` or `offset`, not both | `BOTTOM`, `CENTER`, `INSIDE`, `OUTSIDE`, `TOP`                                                          |
| offset   | `number`                       | You can either have `align` or `offset`, not both | `0` to `Infinity`                                                                                       |

## Wrap text

Wrapping only works for floating elements. Text will "wrap" around the floating `image`.

Add `wrap` options inside the `floating` options:

```ts
wrap: {
    type: [TextWrappingType],
    side: [TextWrappingSide],
},
```

For example:

```ts
doc.createImage(fs.readFileSync("./demo/images/pizza.gif"), 200, 200, {
    floating: {
        horizontalPosition: {
            offset: 2014400,
        },
        verticalPosition: {
            offset: 2014400,
        },
        wrap: {
            type: TextWrappingType.SQUARE,
            side: TextWrappingSide.BOTH_SIDES,
        },
    },
});
```

Wrap options have the following properties are:

| Property | Type               | Notes    | Possible Values                             |
| -------- | ------------------ | -------- | ------------------------------------------- |
| type     | `TextWrappingType` | Optional | `NONE`, `SQUARE`, `TIGHT`, `TOP_AND_BOTTOM` |
| side     | `TextWrappingSide` | Optional | `BOTH_SIDES`, `LEFT`, `RIGHT`, `LARGEST`    |

## Margins

Margins give some space between the text and the image. Margins [only work for floating elements](http://officeopenxml.com/drwPicInline.php). Additionally, the image must also be in wrap mode (see above).

?> Be sure to also set `wrap` in your options!

To use, add the `margins` options inside the `floating` options:

```ts
margins: {
    top: number,
    bottom: number,
    left: number,
    right: number
},
```

For example:

```ts
doc.createImage(fs.readFileSync("./demo/images/pizza.gif"), 200, 200, {
    floating: {
        horizontalPosition: {
            offset: 2014400,
        },
        verticalPosition: {
            offset: 2014400,
        },
        wrap: {
            type: TextWrappingType.SQUARE,
            side: TextWrappingSide.BOTH_SIDES,
        },
        margins: {
            top: 201440,
            bottom: 201440,
        },
    },
});
```

## Examples

### Add image to the document

Importing Images from file system path

[Example](https://raw.githubusercontent.com/dolanmiu/docx/master/demo/demo5.ts ':include')

_Source: https://github.com/dolanmiu/docx/blob/master/demo/demo5.ts_

### Add images to header and footer

Example showing how to add image to headers and footers

[Example](https://raw.githubusercontent.com/dolanmiu/docx/master/demo/demo9.ts ':include')

_Source: https://github.com/dolanmiu/docx/blob/master/demo/demo9.ts_

### Floating images

Example showing how to float images on top of text and optimally give a `margin`

[Example](https://raw.githubusercontent.com/dolanmiu/docx/master/demo/demo38.ts ':include')

_Source: https://github.com/dolanmiu/docx/blob/master/demo/demo38.ts_
