<?php
    //include_once('db_fns.php');
/*	header("Content-Type: text/html; charset=utf-8");
	$conn = db_connect();
	$filtervalue="";
    $noconnect ="<p>对不起，没有查找到您要查找的内容！</p>";
	
	$pagesize=30;//每页显示数

	 $query = "select productid,carnum,kindname,stuffname,phone,portname,updatetime,productlen,diameterlen,wide,thinckness   "
           ." from t_product as p,t_kind as k,t_stuff as s,t_port as r,t_user as u "
          ." where p.userid = u.userid and p.kindid = k.kindid and "
		  ." p.stuffid = s.stuffid and p.portid =r.portid ";	  
		
	if (strlen(trim($filtervalue))>0){
		$query =$query . $filtervalue;
	}
		$page = $_POST['num'];
		$query =$query ." order by updatetime desc limit ".($page -1)*$pagesize.",$pagesize";

    $result = @$conn->query($query);
    if (!$result) {
		echo "<meta http-equiv='Content-Type'' content='text/html; charset=utf-8'>";
        echo $noconnect;
		return;
    }

    //$result = db_result_to_array($result);*/

	/*这里是史航写的*/
 $link = mysql_connect("182.92.240.59","root","abc123");
 $sql = "use mcr";
 mysql_query($sql,$link);
 $sql = "set names utf8";
 mysql_query($sql,$link);
 //$num = $_POST['num'] *10;
 if($_POST['num'] != 0) $num +1;
 $pagesize=30;
 $page = $_POST['num'];
 $sql =  "select productid,carnum,kindname,stuffname,phone,portname,updatetime,productlen,diameterlen,wide,thinckness"
           ." from t_product as p,t_kind as k,t_stuff as s,t_port as r,t_user as u "
          ." where p.userid = u.userid and p.kindid = k.kindid and "
		  ." p.stuffid = s.stuffid and p.portid =r.portid order by updatetime desc limit ".($page -1)*$pagesize.",$pagesize";

 $result = mysql_query($sql,$link);
 $temp_arr = array();

	$temp_arr = array();
	 while($row = mysql_fetch_assoc($result)){
		 $temp_arr[] = $row;
	 }

	$json_arr = array();
	 foreach($temp_arr as $k=>$v){
		 $json_arr[]  = (object)$v;
	 }
	 print_r($json_arr);
	 //echo json_encode( $json_arr );

?>




