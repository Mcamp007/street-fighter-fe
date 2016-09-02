# React Street Fighter  

#### Synopsis
We decided to re build the Acarde game Street Fighter in react using javascript. The users are able challenge each other and the winner can save and view their time, and hp that was left. 

### Problems/Difficulties we encountered
  - Spagethi code 
  - default of keyboard combinations, some keyCodes if you held them down triggered continues attacks or apple keyboard shortcuts
  
### Process
  - started off whiteboarding everything, from logic to the frontend routes
  - testing the package 
  

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



