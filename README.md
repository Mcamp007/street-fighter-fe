# React Fighter
https://warm-mountain-83404.herokuapp.com/

#### Synopsis
We decided to rebuild the arcade game Street Fighter in React using ES6. The users are able challenge each other and the winner can save and view their time and HP. 

### Problems/Difficulties we encountered
  - Spaghetti code 
  - Default of keyboard combinations; if you held down some key codes, they triggered continuous attacks or Apple keyboard shortcuts.
  
### Process
  - Started off whiteboarding everything, from logic to the frontend routes
  - Testing the package 
  
### Instructions

###### P1
  - 1 => backwards
  - a => forwards 
  - w => jump 
  - q => duck 
  - z => haduken
  - LeftAlt => kick
  - control => punch
  - LeftShift => block
###### P2
  - ? => forward
  - } => backwards 
  - "' => duck
  - : => jump 
  - . => haduken
  - rightAlt => kick
  - rightShift => block
  - m => punch


### Package Referance
  - github.com/jcblw/react-sprite-animator
    ```js
    <SpriteAnimator
      ref='sprite'
      width={215}
      height={133}
      sprite='http://imgh.us/kick.svg'
      shouldAnimate={kickMovP1}
      fps={4}
      startFrame={0}
      stopLastFrame={true}
      reset={!kickMovP1}
    />
    ```



