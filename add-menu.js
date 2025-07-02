// Check if file is completely ready
  $(document).ready(function () {

      // Adding click event on id div-1
      // if it clicked then anonymous
      // function will be called
      $('#div-1').click(function () {

          // Load the external html
          // here this refers to 
          // current selector
          $(this).load('div-1.html');
      });

      // Same as above
      $('#div-2').click(function () {
          $(this).load('div-2.html');
      });
  });
