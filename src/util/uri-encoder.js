// this is borrowed from $.param except with no jQuery and a few other modifications.
// https://github.com/jquery/jquery/blob/master/src/serialize.js

export const param = (obj) => {
  let prefix, key, value,
      r20 = /%20/g,
      serialized = [],

      add = (key, value) => {
        value = isFunction(value) ? value() : (value === null ? "" : value);
        if ( value === undefined) {
          serialized[serialized.length] = value;
        } else {
          serialized[serialized.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }
      };

  if(Array.isArray(obj)) {
    for(key in obj) {
      value = obj[key];
      add(key, value);
    }
  } else {
    for(prefix in obj) {
      buildParams(prefix, obj[prefix], add);
    }
  }

  return serialized.filter(k => k !== undefined)
    .join('&').replace(r20, '+');
};

const type = (obj) => {
  let class2type = {},
      toString = class2type.toString
      ;

  if ( obj == null ) { return obj + ""; }
  // Support: Android < 4.0, iOS < 6 (functionish RegExp)
  return typeof obj === "object" || typeof obj === "function" ?
      class2type[ toString.call(obj) ] || "object" : typeof obj;
};

const isFunction = (obj) => {
  return type(obj) === "function";
};

const buildParams = (prefix, obj, add) => {
    let name, key, value,
        rbracket = /\[\]$/;

    if(Array.isArray(obj)) {
      for(key in obj) {
        value = obj[key]
        if(rbracket.test(prefix)) {
          add(prefix, value);
        } else {
          buildParams(prefix + "[" + (typeof value === "object" && value != null ? key : "") + "]", value, add);
        }
      }
    } else if(type(obj) === 'object') {
      for(name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], add);
      }
    } else {
      add(prefix, obj);
    }
};
