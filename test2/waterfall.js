/*
 *  Javascript�ļ���waterfall.js
 */
$(function(){
	
	/*alert("jareaselect:" + jareaselect);
	alert("jstuffselect:" + jstuffselect);
	alert("productlen:" + productlen);
	alert("productwide:" + productwide);
	alert("thinckness:" + thinckness);
	alert("timber:" + timber);*/
     jsonajax();
 });
 
 //�����Ҫ���м����������ǰ���ڵ�λ���ˡ��������������ײ�����100px��ʱ���Ҫ���е���ajax��������
 $(window).scroll(function(){    
     //�˷������ڹ���������ʱ�����ĺ���
     // ����������ײ�����100����ʱ������������
     var $doc_height,$s_top,$now_height;
     $doc_height = $(document).height();        //������document�������߶�
     $s_top = $(this).scrollTop();            //��ǰ����������϶��ٸ߶�
     $now_height = $(this).height();            //�����this Ҳ�Ǿ���window����
     if(($doc_height - $s_top - $now_height) < 100) jsonajax();    
 });
 
 
 //��һ��ajax����������data.php���ϵĻ�ȡ����
 var $num = 0;
 function jsonajax(){
    var jareaselect =document.getElementById("areaselect").value;
    var jstuffselect = document.getElementById("stuffselect").value;
	var productlen=document.getElementById("productlen").value;
	var productwide=document.getElementById("productwide").value;
	var thinckness=document.getElementById("thinckness").value;
	var diameterlen=document.getElementById("diameterlen").value;
	var timber=document.getElementById("timber").value;
	var jkindselect =document.getElementById("kindselect").value;
	$num = $num++;

     $.ajax({
         url:'getdatalist.php',
         type:'POST',
         data:"num="+$num,
		/*"num="+$num+"&type=1&areaselect="+jareaselect+"&kindselect="+jkindselect+"&stuffselect="+jstuffselect
	  +"&productlen="+productlen+"&productwide="+productwide+"&thinckness="+thinckness+"&diameterlen="+diameterlen
	  +"&timber="+timber*/

         dataType:'json',
         success:function(json){
             if(typeof json == 'object'){
                 var neirou,$row,iheight,$item;
                 for(var i=0;i<json.length;i++){
                     neirou = json[i];    //��ǰ������
					  $row =$("#showdata1 ul");
                     /*$("#stage li").each(function(){
                         //�õ���ǰli�ĸ߶�
                         temp_h = Number($(this).height());
                         if(iheight == -1 || iheight >temp_h){
                             iheight = temp_h;
                             $row = $(this); //��ʱ$row��li������
                         }
                     });*/
                     $item = $(
						" <li class='list-item'> "+
							"<a href= 'detail.php?productid="+neirou.productid+"'  class='clearfix'>"+
								"<div class='list-l'> "+
									"<div class='display-tit'><span>"+neirou.carnum+" ".neirou.kindname+" "+neirou.stuffname+" "+"</span> "+
										"<span> ����:"+neirou.productlen+" "+neirou.tempout+"</span> "+
									"</div> "+
									"<div class=''><span class='f-12'>"+neirou.portname+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+neirou.phone+
									"</span><span class='list-time fr'>"+neirou.updatetime+"</span></div>"+
								"</div>"+
								"<div class='list-right'><i class='icon-chevron-right'></i></div>"+
							"</a>"+
						"</li>"
					 
					 ).hide();	
                     $row.append($item);
                     $item.fadeIn();
                 }
             }
         }
     });
 }