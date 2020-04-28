
<script>
    export let value;
    export let handleClick;
  </script>
  
  <style>
    .square {
      flex: 1 0 25%;
      width: 50px;
      height: 70px;
      background-color: black;
      border: 2px solid black;
      margin: 1px;
      padding: 1px;
      font-size: 50px;
      text-align: center;
      color: white;
    }
  
    .square:hover {
      border: 2px solid red;
    }
    .square:hover:after{
      content: 'X';
      color: white;
    }
  </style>
  
  <button class="square" on:click={handleClick}>{value||""}</button>
  
  