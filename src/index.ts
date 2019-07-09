import {hello} from './src/talker/hello';
//or // import * from './talker/hello' as...;
import { moment } from 'moment';

console.log(moment().format('LLLL'));
console.log(hello("Derek"));