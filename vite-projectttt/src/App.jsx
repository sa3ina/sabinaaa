import React, { useEffect } from "react";
import axios from "axios";
import { Divider, Table } from "antd";
import { useState } from "react";
import { Button, Flex } from "antd";
import Swal from "sweetalert2";
import { Modal } from "antd";
const App = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [cityEdit, setCityEdit] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    let obj;
    obj = {
      companyName: name,
      contactTitle: city,
    };
    axios.post(`https://northwind.vercel.app/api/suppliers`, obj);
    setData([...data, obj]);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios(`https://northwind.vercel.app/api/suppliers`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };
  const handleOkEdit = () => {
    setIsModalOpenEdit(true);
    false;
  };
  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "companyName",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            {
              text: "Yellow",
              value: "Yellow",
            },
            {
              text: "Pink",
              value: "Pink",
            },
          ],
        },
        {
          text: "Category 2",
          value: "Category 2",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },

    {
      title: "Contact title",
      dataIndex: "contactTitle",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Delete",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            fetch(`https://northwind.vercel.app/api/suppliers/${record.id}`, {
              method: "DELETE",
            });

            setData((data) => data.filter((x) => x.id !== record.id));
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          }}
        >
          {"Delete"}
        </Button>
      ),
    },
    {
      title: "Edit",
      render: (text, record) => (
        <>
          <Button type="primary" onClick={showModalEdit}>
            Edit
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpenEdit}
            onOk={handleOkEdit}
            onCancel={handleCancelEdit}
          >
            <label htmlFor="">Name</label>

            <input type="text" />
            <br />
            <br />
            <label htmlFor="">Contact title</label>
            <input type="text" />
          </Modal>
        </>
      ),
    },
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal
        title="Add Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label htmlFor="">Name</label>

        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Contact title</label>
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </Modal>
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(record) => record.id}
      />
    </>
  );
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export default App;
