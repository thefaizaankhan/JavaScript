// const myArr = []
// %DebugPrint(myArr)

// Continuous Array and Holey Array 
// Continuous Array - All the elements are present in the array and there are no empty slots in between
// Holey Array - There are empty slots in between the elements of the array

// based on the elements of the array, optimization done by js engine is different.

// SMI = Small Interger (type of an array element)
// Packed Elements - All the elements are of the same type
// Double Elements - Elements are of different types (like string, number, boolean, float,... etc.)


const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS (only numbers are allowed)(default array type)

arrTwo.push(6.2)
// PACKED_DOUBLE_ELEMENTS (numbers and floats are allowed)

arrTwo.push('7')
// PACKED_ELEMENTS (numbers, floats, strings, booleans, undefined, null, objects, functions, symbols,.. etc. are allowed)

// Once a PACKED_SMI_ELEMENTS array is converted to PACKED_ELEMENTS array or PACKED_DOUBLE_ELEMENTS, it cannot be converted back to PACKED_SMI_ELEMENTS array even after deleting the array elements.

arrTwo[10] = 12
// HOLEY_ELEMENTS (empty slots are allowed)

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[16]);

// bound check -> the array is in bound or out of bound -> if out of bound -> the index is not present in the array, it will return undefined. if undefined then
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(arrTwo.prototype, 11)
// hasOwnProperty(Object.prototype, 11) // hasOwnProperty is one of the most expensive operation in javascript

// Holes are very expensive in js 

// It is recommmended that our array shouldn't contain arrays in it.

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[4]);

// SMI > DOUBLE > PACKED (FOR CONTINUOUS ARRAYS)
// H_SMI > H_DOUBLE > H_PACKED (FOR HOLEY ARRAYS)

const arrFour = new Array(3)
// just 3 holes -> HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

// THIS IS BETTER APPROACH
const arrFive = []
arrFive[0] = '1' // PACKED_ELEMENTS
arrFive[1] = '2' // PACKED_ELEMENTS
arrFive[2] = '3' // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
// arrSix.push(Infinity) // PACKED_DOUBLE
// arrSix.push(NaN) // PACKED_DOUBLE

// It is recommended that use for loop, for-of loop, forEach loop use inbuilt methods provided in the loop by default try not to define or use methods by yourself.

// ReferenceError: %DebugPrint is not defined

// Refer to github repo of JavsScript V8 Engine - https://github.com/v8/v8

// Refer to github repo of jsvu (JavaScript (engine) Version Updater) - https://github.com/GoogleChromeLabs/jsvu

// jsvu is a command-line tool to install and manage different versions of JavaScript engines.

/* 
# installing the jsvu package globally
> C:\Users\faiza\OneDrive\Desktop\Testing All\javascript\12_arrays_indepth>npm install -g jsvu

  npm WARN deprecated inflight@1.0.6:...npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

  added 182 packages in 25s

  10 packages are looking for funding
    run `npm fund` for details

> C:\Users\faiza\OneDrive\Desktop\Testing All\javascript\12_arrays_indepth>jsvu --version
📦 jsvu v2.5.1 — the JavaScript engine Version Updater 📦

  Unrecognized argument: "--version"

  [<engine>@<version>]
  [--os={mac64,mac64arm,linux32,linux64,win32,win64,default}]
  [--engines={chakra,graaljs,hermes,javascriptcore,quickjs,spidermonkey,v8,v8-debug,xs},…]

  Complete documentation is online:
  https://github.com/GoogleChromeLabs/jsvu#readme

  Complete documentation is online:
  https://github.com/GoogleChromeLabs/jsvu#readme

# locating the global npm root directory
> C:\Users\faiza\OneDrive\Desktop\Testing All\javascript\12_arrays_indepth>npm root -g
  
  C:\Users\faiza\AppData\Roaming\npm\node_modules

# locating the jsvu package
> C:\Users\faiza\OneDrive\Desktop\Testing All\javascript\12_arrays_indepth>cd C:\Users\faiza\AppData\Roaming\npm\node_modules

> C:\Users\faiza\AppData\Roaming\npm\node_modules>dir
 Volume in drive C is Windows 11
 Volume Serial Number is 6846-05A5

 Directory of C:\Users\faiza\AppData\Roaming\npm\node_modules

12/26/2024  02:50 PM    <DIR>          .
12/26/2024  02:50 PM    <DIR>          ..
12/26/2024  02:50 PM    <DIR>          jsvu
09/09/2024  11:07 PM    <DIR>          react-native-cli
               0 File(s)              0 bytes
               4 Dir(s)  53,923,688,448 bytes free

> C:\Users\faiza\AppData\Roaming\npm\node_modules>cd jsvu

# contents of jsvu package (engines and all..)
> C:\Users\faiza\AppData\Roaming\npm\node_modules\jsvu>dir

 Volume in drive C is Windows 11
 Volume Serial Number is 6846-05A5

 Directory of C:\Users\faiza\AppData\Roaming\npm\node_modules\jsvu

12/26/2024  02:50 PM    <DIR>          .
12/26/2024  02:50 PM    <DIR>          ..
12/26/2024  02:50 PM             5,619 cli.js
12/26/2024  02:50 PM    <DIR>          engines
12/26/2024  02:50 PM            10,174 LICENSE
12/26/2024  02:50 PM    <DIR>          node_modules
12/26/2024  02:50 PM             2,875 package.json
12/26/2024  02:50 PM             8,342 README.md
12/26/2024  02:50 PM    <DIR>          shared
               4 File(s)         27,010 bytes
               5 Dir(s)  53,923,688,448 bytes free

> C:\Users\faiza\AppData\Roaming\npm\node_modules\jsvu>cd engines

> C:\Users\faiza\AppData\Roaming\npm\node_modules\jsvu\engines>dir
 Volume in drive C is Windows 11
 Volume Serial Number is 6846-05A5

 Directory of C:\Users\faiza\AppData\Roaming\npm\node_modules\jsvu\engines

12/26/2024  02:50 PM    <DIR>          .
12/26/2024  02:50 PM    <DIR>          ..
12/26/2024  02:50 PM    <DIR>          chakra
12/26/2024  02:50 PM    <DIR>          graaljs
12/26/2024  02:50 PM    <DIR>          hermes
12/26/2024  02:50 PM    <DIR>          javascriptcore
12/26/2024  02:50 PM    <DIR>          quickjs
12/26/2024  02:50 PM    <DIR>          spidermonkey
12/26/2024  02:50 PM    <DIR>          v8
12/26/2024  02:50 PM    <DIR>          v8-debug
12/26/2024  02:50 PM    <DIR>          xs
               0 File(s)              0 bytes
              11 Dir(s)  53,923,078,144 bytes free

(v8-debug - will be in our main focus here. It is a debug build of the V8 engine in this %DegugPrint() function is present which gives us the internal representation and details of the object)

*/
