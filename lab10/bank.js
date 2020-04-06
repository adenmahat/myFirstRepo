$(function() {
  $("#accounts").hide();
  $("#form").submit(function(e) {
    e.preventDefault();
    let accountNo = $("#accountNo").val();
    let customerName = $("#customerName").val();
    let accountType = $("#accountType").val();
    $("#accounts").append(
      `<li class="list-group-item">${accountNo} | ${customerName} | ${accountType}</li>`
    );
    $("#accounts").show();
    $("#accountNo").val("");
    $("#customerName").val("");
  });
});
