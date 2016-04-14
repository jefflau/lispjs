import {
  reduce
} from './lib';
import {assertEquals} from './testFramework';



/* TESTS */

//reduce
assertEquals(reduce([1,2,3], (a, b) => a + b), 6)

