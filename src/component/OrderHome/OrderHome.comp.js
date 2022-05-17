import React, { useState } from "react";
import DataTable from "../DataTable/DataTable.comp";
import { useNavigate } from "react-router";
import { Tooltip } from "@mui/material";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

const OrderHomeComponent = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([
    {
      id: "12d445t6vg",
      user: {
        id: 5,
        name: "Yogesh bhattarai",
        image:
          "https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=20&m=1133213198&s=612x612&w=0&h=ydafOAGmouWyCLdg3HcIGq-SmSK4wxC-vj09VM1dEJM=",
      },
      product: {
        id: 7,
        name: "Product One",
        image:
          "data:image/jpeg;base64,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",
      },
      delivery_date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      pricing: 2000,
      order_status: "pending",
    },
    {
      id: "52d445t6vg",
      user: {
        id: 5,
        name: "Yogesh bhattarai",
        image:
          "https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=20&m=1133213198&s=612x612&w=0&h=ydafOAGmouWyCLdg3HcIGq-SmSK4wxC-vj09VM1dEJM=",
      },
      product: {
        id: 7,
        name: "Product One",
        image:
          "data:image/jpeg;base64,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",
      },
      delivery_date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      pricing: 4000,
      order_status: "pending",
    },
    {
      id: "92d445t6vg",
      user: {
        id: 5,
        name: "Bishant Bhattarai",
        image:
          "https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=20&m=1133213198&s=612x612&w=0&h=ydafOAGmouWyCLdg3HcIGq-SmSK4wxC-vj09VM1dEJM=",
      },
      product: {
        id: 7,
        name: "Product Five",
        image:
          "data:image/jpeg;base64,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",
      },
      delivery_date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      pricing: 4000,
      order_status: "cancelled",
    },
    {
      id: "62d445t6vg",
      user: {
        id: 5,
        name: "Yogesh Chapagain",
        image:
          "https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=20&m=1133213198&s=612x612&w=0&h=ydafOAGmouWyCLdg3HcIGq-SmSK4wxC-vj09VM1dEJM=",
      },
      product: {
        id: 7,
        name: "Product three",
        image:
          "data:image/jpeg;base64,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",
      },
      delivery_date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      pricing: 3000,
      order_status: "confirmed",
    },
  ]);

  const changeOrderStatus = (status, id) => {
    console.log("Setting the status", status, id);
  };

  const onClickItem = (id) => navigation("/orders/" + id);
  return (
    <div>
      <DataTable
        data={data}
        changeStatus={changeOrderStatus}
        actions={(id) => [
          <Tooltip title={"See Order"}>
            <RemoveRedEyeOutlined onClick={() => onClickItem(id)} />
          </Tooltip>,
        ]}
      />
    </div>
  );
};

export default OrderHomeComponent;
