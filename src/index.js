// Test import of a JavaScript module
import { HashTable } from '@/js/hash-table'

// Test import of styles
import '@/styles/index.scss';

const hash = new HashTable();

console.log(hash._hash('123'))