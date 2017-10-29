$('#deleteStudent').click(function(){
  const studentId = $(this).attr('studentId');
  $.ajax({
    type:'POST',
    url:'/student/delete',
    data:{ studentId },
    success:function(res){
      if(res.result === 'success'){
        location.href = '/'
      }     
    }
  });
})