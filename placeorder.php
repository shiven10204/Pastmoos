<?php
$url = "https://my.ithinklogistics.com/api_v3/order/add.json";
$data = array(
    "data" => array(
        "shipments" => array(
            array(
                "waybill" => $waybill,
                "order" => $order,
                "order_date" => $order_date,
                "total_amount" => $total_amount,
                "name" => $name,
                "add" => $add,
                "add2" => $add2,
                "pin" => $pin,
                "phone" => $phone,
                "email" => $email,
                "is_billing_same_as_shipping" => $is_billing_same_as_shipping,
                "products" => $products,
                "shipment_length" => $shipment_length,
                "shipment_width" => $shipment_width,
                "shipment_height" => $shipment_height,
                "weight" => $weight,
                "cod_amount" => $cod_amount,
                "payment_mode" => $payment_mode,
                "return_address_id" => $return_address_id
            )
        ),
        "pickup_address_id" => $pickup_address_id,
        "access_token" => $access_token,
        "secret_key" => $secret_key,
        "logistics" => $logistics,
       
    )
);

$options = array(
    'http' => array(
        'header' => "Content-type: application/json\r\n",
        'method' => 'POST',
        'content' => json_encode($data)
    )
);

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>
