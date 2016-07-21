/***
 *	
 **/

$().ready( function() {
	
	//添加商品至购物车
	$(".addCartItem").click( function() {
      var $this = $(this);
	  var id = $this.metadata().id;
		
	  var quantity = $("#quantity").val();
	  if (quantity == null) {
		quantity = 1;
	  }
	  var reg = /^[0-9]*[1-9][0-9]*$/;
	  if (!reg.test(quantity)) {
	    Modal.alert("添加购物车失败:商品数量不对");
	    return false;
	  }
      $.ajax({
		url: JFinalshop.base + "/shop/cartItem/ajaxAdd",
		data: {"id": id, "quantity": quantity},
		dataType: "json",
		beforeSend: function() {
		  $this.attr("disabled", true);
		},
		success: function(data) {
		  if (data.status == "success") {
			Modal.alert("添加成功<br>购物车共计商品：" + data.totalQuantity + "件，总计金额：" + data.totalPrice);
		  } else if (data.status == "error") {
			Modal.alert(data.message);
		  }
		  $this.attr("disabled", false);
		}
	  });
	});

});