import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import classes from "./SingleOrder.module.css";
import ProductItem from "./../../component/ProductItem/ProductItem";

const SingleOrder = () => {
  const dummyData = {
    id: 104,
    status: "draft",
    total_amount: 30,
    shipping_address_id: 55,
    billing_address_id: null,
    estimated_delivery_time: null,
    net_price: 80,
    payment_type: "cash",
    payment_status: false,
    orderItems: [
      {
        data: {
          id: 64,
          supplier_id: 1,
          category_id: 3,
          name: "product teststt",
          description: "this is the updated product abc ",
          additional_info: "additional info of the product",
          unit_price: 30,
          total_quantity: 4,
          image_url:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8&w=1000&q=80",
          bid_status: false,
          currency_type: null,
          tags: null,
        },
        supplierInfo: {
          id: 1,
          first_name: "upban",
          middle_name: "son",
          last_name: "sharma",
          genra: "picasso",
          image_url: null,
        },
        likesCount: 2,
        tags: [],
        category: { id: 3, name: "Modern" },
      },
    ],
  };
  const params = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [orderId, setOrderId] = useState(params.id);
  const [order, setOrder] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);

  useEffect(() => {
    setOrderId(params.id);
    fetchOrder(params.id);
  }, [params.id]);

  const fetchOrder = async (id) => {
    setOrder(dummyData);
    // const data = await dispatch(FetchOrderById(id));
    // if (data)
    // setOrder(data);
    // fetchShippinAndBillingAddressData(data);
  };

  const fetchAddress = async (id, shipping) => {
    // const address = await dispatch(FetchAddressById(id));
    // if (shipping) {
    //   setShippingAddress(address);
    // } else {
    //   setBillingAddress(address);
    // }
  };

  const fetchShippinAndBillingAddressData = (order) => {
    // if (order.billing_address_id) {
    //   fetchAddress(order.billing_address_id, false);
    // }
    // if (order.shipping_address_id) {
    //   fetchAddress(order.shipping_address_id, true);
    // }
  };

  const deleteOrderSetter = (order) => {
    // const success = dispatch(DeleteOrderList(order));
    // if (success) {
    //   navigation("/orders");
    // }
  };
  const deleteOrder = () => {
    //   const confirmData = {
    //     title: "The order #" + orderId + " will be removed from draft.",
    //     onAccept: () => deleteOrderSetter(orderId),
    //   };
    //   dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };

  const selectOrderToCheckout = (order) => {
    // const confirmData = {
    //   title: "The order #" + order + " will be selected in checkout",
    //   onAccept: () =>
    //     navigation("/checkout", { state: { order, redirected: true } }),
    // };
    // dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };

  const handleDeleteProduct = (items, order, product) => {
    // dispatch(RemoveProductOnOrder(order, product));
    // const orderItems = items.filter((item) => item.data.id !== product);
    // if (orderItems.length <= 0) {
    // } else {
    //   setOrder({
    //     ...order,
    //     orderItems: orderItems,
    //   });
    // }
  };
  const handleDispatchDeleteProduct = (order, product) => {
    // const confirmData = {
    //   title: "The Item will be removed from #" + order + ".",
    //   onAccept: () => handleDeleteProduct(order.orderItems, order, product),
    // };
    // dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };

  const cancel = async (id) => {
    // const res = await dispatch(CancelOrder(id));
    // if (res) {
    //   let updateData = {
    //     ...order,
    //     status: "cancelled",
    //   };
    //   setOrder(updateData);
    // }
  };

  const cancellationOrder = () => {
    // const confirmData = {
    //   title: `The order #${orderId} will be cancelled and your paid amount will return`,
    //   onAccept: () => cancel(orderId),
    // };
    // dispatch(showConfirmation(confirmData.title, confirmData.onAccept));
  };
  return (
    <div className={"container-fluid " + classes.single__order__page}>
      <h1 className={classes.single__order__title}>Order #{orderId}</h1>
      <div className={"container-fluid " + classes.order__container}>
        <div className={"row "}>
          <div
            className={
              "col-lg-8 col-md-6 col-xs-12 " + classes.products__container
            }
          >
            {order &&
              order.orderItems.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item.data.id}
                  image={item.data.image_url}
                  name={item.data.name}
                  price={item.data.unit_price}
                  supplierName={
                    item.supplierInfo.first_name +
                    " " +
                    item.supplierInfo.last_name
                  }
                  supplierInfo={item.supplierInfo}
                  productData={item.data}
                  description={item.data.description}
                  likesCount={item.likesCount}
                  time={item?.auction?.expiration_date || null}
                  removeItem={(product) =>
                    handleDispatchDeleteProduct(orderId, product)
                  }
                />
              ))}
          </div>
          {order && (
            <div className={"col-lg-4 col-md-6 col-xs-12 "}>
              <div className={classes.order__details__container}>
                <div className={classes.order__detail}>
                  <h6>Status</h6>
                  <h5>{order.status}</h5>
                </div>
                <div className={classes.order__detail}>
                  <h6>Price*</h6>
                  <Tooltip title="This price is inclusive of the selected address's shipping charge.">
                    <h5>
                      {parseInt(order.net_price).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "NRS",
                      })}
                    </h5>
                  </Tooltip>
                </div>
                <div className={classes.order__detail}>
                  <h6>Order Items</h6>
                  <h5>{order.orderItems.length}</h5>
                </div>
                {shippingAddress && (
                  <div className={classes.order__detail}>
                    <h6>Shipping</h6>
                    <div className={classes.address__container}>
                      <h5>{shippingAddress.name}</h5>
                    </div>
                  </div>
                )}
                {billingAddress && (
                  <div className={classes.order__detail}>
                    <h6>Billing</h6>
                    <div className={classes.address__container}>
                      <h5>{billingAddress.name}</h5>
                    </div>
                  </div>
                )}
                {order.payment_status && (
                  <>
                    <div className={classes.order__detail}>
                      <h6>Payment</h6>
                      <h5>{order.payment_type}</h5>
                    </div>
                    {order.estimated_delivery_time && (
                      <div className={classes.order__detail}>
                        <h6>Estimated Delivery</h6>
                        <h5>
                          {new Date(
                            order.estimated_delivery_time
                          ).toUTCString()}
                        </h5>
                      </div>
                    )}
                  </>
                )}
              </div>
              {order.payment_status ? (
                <div className={classes.buttons__container}>
                  <button className={classes.primary}>Generate Invoice</button>
                  <button
                    className={classes.secondary}
                    onClick={() => cancellationOrder()}
                  >
                    Cancel Order
                  </button>
                </div>
              ) : (
                <div className={classes.buttons__container}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      selectOrderToCheckout(orderId);
                    }}
                    className={classes.primary}
                  >
                    Accept Order
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteOrder();
                    }}
                    className={classes.secondary}
                  >
                    Cancel Order
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
