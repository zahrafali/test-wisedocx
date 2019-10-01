
// tslint:disable-next-line: no-shadowed-variable no-any
function isObject(obj: any): any {
  return (typeof obj === "object" && obj !== null) || typeof obj === "function";
}

/* Object traverser */
// tslint:disable-next-line: typedef no-any
function traverseElements(element: any, key: any, cb: any): any {

    if (!Array.isArray(element) && !isObject(element)) {
     throw Error("Element should be an Object or an Array");
  }
    if (isObject(element)) {
      for (const k of Object.keys(element)) {
        const el = element[k];
        if (k === key) {
            cb(el);
        }
        if (isObject(el)) {
          traverseElements(el, key, cb);
        }
      }
    }
}

/* This function finds the attribute 'xmlCode' specifically added for
math and extracts the OMML code stored in it into an array */

// tslint:disable-next-line: no-any
function find(obj: any): any {
  const arr: string[] = [];
  traverseElements(obj, "xmlCode", (code) => {
    arr.push(code);
  });
  return arr;
}

export { find };
