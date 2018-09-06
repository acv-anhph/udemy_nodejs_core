# Section 2: V8 the javascript engine

## 06. proccessors, machine language and C++

### machine code(language): programming languages spoken by computer processors

- every program you run on your computer has been converted (compiled) into machine code

### A javascript engine: a program that converts javascript code into something the computer processor can understand. And it should follow the ECMAScript standard on how the language should work and what features it should have

# Section 4: Modules, Exports and Require

## 26. Module patterns

### Revealing module pattern: exposing only the properties and methods you want via an returned object. A very common and clean way to structure and protect code within modules.

# Section 5: Events and the Even Emitter

## 31. Events

- Something that has happened in our app that we can response to
- in Nodejs wa actually talk about two different kinds of events

## 33. The Node Event Emitter

- The code that response to an event

  - In javascript's case, the listener will be a function

- Magic string: A string that has some special meaning in our code
  - This is bad because it makes it easy for a typo to cause a bug and hard for tools to help us find it
