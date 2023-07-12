$('#commentSubmit').on('click', function() {
    $('#wrapBox').prepend(`<div class="box"> 
    <label for="Name" class="personName">` + $("#namespot").val()+ ` </label>
    <h3 class="inPutComment"> `+ $("#Comment").val()+  `</h3>
    <button type="button" class="Delete">Delete</button>
    <button type="button" class="Edit"> Edit</button> 
    <input type="text" class="EditArea hidden">
    <input type="submit" class="submit hidden"> 
  </div>
</div>`);
  });


  $('#wrapBox').on('click', '.Edit', function() {
    $(this).next().toggleClass("hidden");
    $(this).next().next().toggleClass("hidden");
    let v = $(this).siblings()[1];
    $(this).next().val(v.innerHTML);
   });


   $('#wrapBox').on('click', '.submit', function() {
      let v = $(this).siblings('.inPutComment');
      let g = $(this).siblings('.EditArea');
      
      v.text(g.val());

      $(this).siblings(".EditArea").toggleClass("hidden");
      $(this).toggleClass("hidden");
   });

  $('#wrapBox').on('click', '.Delete', function(){
    console.log("hello")
    $(this).parent(".box").remove()
    
  });
 