import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"
import { NumbersCollection } from "./NumbersCollection"
import { Sorter } from "./Sorter"

// Sorting array of numbers
const inputArray = [5, 1, 4, 2, 8]
console.log("🚀 Input Array: ", inputArray)
const numbersCollection = new NumbersCollection(inputArray)
numbersCollection.sort()
console.log('🚀 Output Array:', numbersCollection.data)

// Sorting strings
const inputString = 'Xaayb'
console.log("🚀 Input String: ", inputString)
const charactersCollection = new CharactersCollection(inputString)
charactersCollection.sort()
console.log('🚀 Output String:',charactersCollection.data)


const linkedList = new LinkedList();
linkedList.add(1)
linkedList.add(3)
linkedList.add(5)
linkedList.add(2)

console.log('🚀 Input Linked List: ')
linkedList.print()

linkedList.sort()

console.log('🚀 Input Linked List: ')
linkedList.print()
