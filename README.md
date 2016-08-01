<!--Hook: Raise your hand if you love binary.  For those who didn't raise your hand, I have bad news for you: you'll probably have to know it to get through interviews anyway.  I have certainly been asked this exact question in an interview: "What is 2^32?"  Hopefully your interviewers will be a little more problem-solving centric, but I can almost guarantee you that the math you will see in an interview will have something to do with that.  We're about to look at one of the big applications: memory storage.  -->

<!-- There will be some hints below.  I cannot stress enough that you don't look at those hints until after we've come together as a class.  We're going to think about it individually, in pairs, and then finally as a class, and seeing an answer would ruin the process. -->

<!-- Draw up four bytes of 0s and 1, label the starting points 0x0, 0x8, 0xf, 0xf8, 0xff-->

<!-- Try to get students to answer as many of these as possible:

1) Start with all 0s -- blank memory (remember, 0 = nothing = false, 1 = something = true)
2) What would 0 be in 8-digit binary?
2) What would 255 be?
3) What would 4 be?
4) What would 5 be?
5) Write up var big_number = 232, var middle_number = 123, var small_number = 31, have students write out the binary for each
6) Put big_number at 0x0, middle_number at 0xf, small_number at 0xf8

OK, now our variables are saved.  Now all Ruby or Javascript needs to do is create a table: big_number: 0x0, middle_number: 0xf, etc.  So I'm looking for small_number, that's 0xf8, so my computer returns what number?

-->

# Data Structures: Stacks and Queues

Stacks and queues are two commonly used data structures.  You can read about them below or watch [this video](https://www.youtube.com/watch?v=6QS_Cup1YoI). If you watch the video, note that all the operations mentioned take O(1) time.  What does that mean?  No matter how big your stack or queue gets (that's n), the operations in the video, and the operations we'll focus on below, take the same amount of time. The time needed DOES NOT depend on the number of things in the stack, so it's constant, O(1) time.

## Objectives:

* **Describe** stacks and queues
* **Pseudo-code** a stack and a queue
* **Solve** interview questions with stacks and queues

##Stacks

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png" width="400px" alt="stack image with push and pop">

Stacks as a data structure are a lot like stacks as a physical structure. Think of stacks of dishes or books. We can remove an item from the top of the stack (by `pop`ing), or add an item to the top of the stack (by `push`ing it). While we may be able to carefully pull from within stacks of real world objects, the data structure only allows us to manipulate the top item of the stack.  These main operations for a stack - `push` and `pop` - are both O(1) constant time. Some stack implementations also allow us to `peek` at the value of the top item without actually `pop`ing it off of the stack.

Stacks are "Last In, First Out" -- the last item pushed on top of a stack will be the first thing popped off of the stack.  

<img src="http://stratton.d11.org/PublishingImages/kid%20with%20pancakes.gif" alt="child defending stack of pancakes using fork and knife" width="400px">

*Don't `pop` from Jimmy's stack of pancakes.*

### Thinking with Stacks

1. Draw a stack after each of the following operations:

  * PUSH 0
  * POP
  * PUSH 2
  * PUSH 4
  * PUSH 6
  * POP
  * PUSH 8

  <details><summary>click for answer</summary>

    ```
    * start     []

    * PUSH 0    [0]

    * POP       []

    * PUSH 2    [2]

    * PUSH 4    [2, 4]

    * PUSH 6    [2, 4, 6]

    * POP       [2, 4]

    * PUSH 8    [2, 4, 8]
    ```

  </details>

1. Stacks are often implemented with arrays, given the built-in methods we have access to in JavaScript and Ruby.  So, let's think of arrays.  Where would you put the "top" of the stack? How would you add something to the top the stack? How would you take something off?

 <details><summary>super stuck? click for an answer...</summary>
 > The "top" could be the end of the array, and you could use array methods `push` and `pop`.  Thanks, high level programming languages!
 </details>

##Queues


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png" width="400px" alt="queue image with enqueue and dequeue">


Queues as a data structure are a lot like queues as a physical structure. This makes more sense with British English, where *queue* means "a line" or "to line up". Think of an orderly line of people waiting to do something. We can remove an item from the front of the queue when its turn comes (by `dequeue`ing), or add an item to the back of the queue when it joins the line (by `enqueue`ing it). Again, while we may be able to "cut" in line in the real world, the queue data structure only allows us to add to the end of the stack or remove from the beginning.  The `enqueue` and `dequeue` operations for a queue are both O(1) - constant time.  Like with stacks, some implementations of queues also allow us to `peek` at the value of the first item without `dequeue`ing it.

Queues are "First In, First Out" -- the first item enqueued will be the first to move all the way through the line and get dequeued.

<img src="http://www.rioleo.org/images/static/queuesafety.jpg" alt="stick figure demon eats person cutting in line -- from popcoaster.com" width="400px">

### Thinking with Queues

1.  Draw a queue after each of the following operations:

  * ENQUEUE 0
  * DEQUEUE
  * ENQUEUE 2
  * ENQUEUE 4
  * ENQUEUE 6
  * DEQUEUE
  * ENQUEUE 8

  <details><summary>click for answer...</summary>
    ```
    * start        []
    * ENQUEUE 0    [0]
    * DEQUEUE      []
    * ENQUEUE 2    [2]
    * ENQUEUE 4    [2, 4]
    * ENQUEUE 6    [2, 4, 6]
    * DEQUEUE      [4, 6]
    * ENQUEUE 8    [4, 6, 8]
    ```
  </details>



1. How would you implement a queue **with an array**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?

 <details><summary>super stuck? click for an answer...</summary>
 > The "front" could be the beginning of the array.  To enqueue, you'd use JavaScript or Ruby's handy `push` array method. To dequeue, you could use JavaScript or Ruby's `shift` method, which removes and returns the first element from an array.

 </details>

<!--Catch phrase with Stack, Push, Pop, Queue, Enqueue, Dequeue -->

## Challenges

#### Design Decisions

Would you use a stack or a queue to...


1. ... let users create playlists and play back the songs?

1. ... allow a user to undo changes to a document, one by one?

1. ... display *only* the 10 most recent messages a user posted, in the order they were posted?


#### The Call Stack

 Many processors and programming languages rely on something called the "call stack," especially for recursion. The call stack keeps track of function calls that are in the process of executing and where each function should "return" to.  When a function is called, it's `push`ed onto the call stack. When the function returns, it's `pop`ed off of the stack. Actual call stacks are a little more complex, but you can think of the call stack as just storing function calls. 

 Here's a recursive `factorial` function:

 ```js
 function factorial(num){
   if (num > 1){
     return num * factorial(num-1);
   } else if (num === 1 || num === 0){
     return 1;
   } else {
     console.log("can't do factorial of this number!");
     return undefined;
   }
 }

 factorial(3);
 // => 6
 ```

Draw the full call stack for `factorial(3)` at each step in the function's execution.


 <details><summary>click for an answer...</summary>

  ```
  * [factorial(3)]
  * [factorial(3), factorial(2)]  
  * [factorial(3), factorial(2), factorial(1)]  
  * [factorial(3), factorial(2)]  
  * [factorial(3)]  
  * []
  ```

 </details>


#### Message Queues

 Queues are often used to create "buffers" that temporarily store data from one part of a program until another part of a program can process the data. This is common with asynchronous data transfer and with mismatches between how often data is sent and how often it can be processed.

 We'll think of a scenario where restaurant diners order food faster than the chefs can cook it.  

 1. Describe how you would use a queue to help the chef keep track of meals to make.  

 1. What should the chef do when the queue is empty?

 1. How would you distribute orders if there are 3 chefs?

###Further Resources

* [Call Stack in JS Explained](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [Understanding Memory Addresses](http://computer.howstuffworks.com/c23.htm)
