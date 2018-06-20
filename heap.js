// Declartion of a heap:
// Heaps can be represented using arrays since heaps are forming complete binary trees there will not be any wastage of locations.

// Parent of a node:
// For a node at ith location, its parent is at i/2 location. Time complexity O(1).

// Children of a node:
// For node at ith location, its children are at 2*i and 2*i+1 locations. Time complexity O(1).

// Getting max elem:
// Since max elem in max heap is always at root, it will be stored in heapList[1]. Time complexity O(1).

// Heapifying an elem:
// After inserting an elem into heap, it may not staisfy the heap property. In that case, we need to adjust the locations of the heap to make it heap again.
// This process is called heapifying. Time complexity O(logn).

// Deleting an elem:
// To delete an elem from the heap we just need to remove the elem from the root. After deleting root elem, copy last elem of heap at root and percolate down.
// Time complexity O(logn).

// Inserting an elem:
// The newly added elem might not staisfy the heap property therefore we need to heapify. In this case, percolate up. 
// Time complexity O(logn).

class Heap{
    constructor(){
        this.heapList = [0]; // elements in a heap
        this.size = 0;      // size of heap 
    }
    parent(index){
        console.log(index/2);
        return index/2;
    }
    leftChild(index){
        // array begins at index 1
        console.log(2 * index);
        return 2 * index;
    }
    rightChild(index){
        console.log(2 * index + 1);
        return 2 * index + 1;
    }
    getMax(){
        if(this.size == 0){
            return -1;
        } else {
            console.log(this.heapList[1]);
            return this.heapList[1];
        }
    }
    percolateDown(index){
        while((index * 2) <= this.size){
            let maxChild = this.maxChild(index);
            if(this.heapList[index] < this.heapList[maxChild]){
                let temp = this.heapList[index];
                this.heapList[index] = this.heapList[maxChild];
                this.heapList[maxChild] = temp;
            }
            index = maxChild;
        } 
        console.log(this.heapList);
    }
    maxChild(index){
        if((index * 2 + 1) > this.size){
            return index * 2;
        } else if (this.heapList[index * 2] < this.heapList[index * 2 + 1]){
            return index * 2 + 1;
        } else {
            return index * 2;
        }
    }
    percolateUp(index){
        while(Math.floor(index / 2) > 0){
            if(this.heapList[index] > this.heapList[Math.floor(index / 2)]){
                let temp = this.heapList[Math.floor(index / 2)];
                this.heapList[Math.floor(index / 2)] = this.heapList[index];
                this.heapList[index] = temp;
            }
            index = Math.floor(index / 2);
        }
        console.log(this.heapList);
    }
    deleteMax(){
        let returnVal = this.heapList[1];
        this.heapList[1] = this.heapList[this.size];
        this.size = this.size - 1;
        this.heapList.pop();
        this.percolateDown(1);
        console.log(returnVal);
        return returnVal;
    }
    insert(k){
        this.heapList.push(k);
        this.size = this.size + 1;
        this.percolateUp(this.size);
    }
}

let heap_1 = new Heap();
heap_1.insert(31);
heap_1.insert(10);
heap_1.insert(16);
heap_1.insert(9);
heap_1.insert(8);
heap_1.insert(14);
heap_1.insert(12);
heap_1.insert(3);
heap_1.insert(1);
heap_1.insert(5);
heap_1.insert(7);
heap_1.insert(19);
heap_1.deleteMax();
