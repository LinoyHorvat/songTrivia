import React, { Component } from "react";
import "./App.css";
import ShoeCard from "./components/ShoeCard";
import Input from "./components/Input";
import shoesApi from "./api";

class App extends Component {
  state = { data: [], name: "", price: null, size: null ,update: "" };

  async componentDidMount() {
    const { data } = await shoesApi.get("shoesApp");
    this.setState({ data }, () => {
      console.log(this.state.data);
      this.displayDataFromState();
    });
  }
  handleCreate = async () => {
    try {
      let dataCopy = [...this.state.data];
      const newShoe = {
        name: this.state.name,
        price: Number(this.state.price),
        size: Number(this.state.size)
        };
      await shoesApi.post("/shoesApp/", newShoe);
      dataCopy.push(newShoe);
      this.setState({ data: dataCopy });
    } catch (error) {}
  };

  handleDelete = async (id) => {
    try {
      const dataCopy = [...this.state.data];
      const filteredData = dataCopy.filter((shoe) => shoe.id !== id);
      await shoesApi.delete(`/shoesApp/${id}`);
      this.setState({ data: filteredData });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleUpdate = async (id, name, price, size) => {
    const dataCopy = [...this.state.data];
    let shoeIdx = dataCopy.findIndex((shoe) => {
      return shoe.id === id;
    });
    const updatedItem = {
      ...dataCopy[shoeIdx],
      name: name,
    };
    console.log(`dataCopy = ${dataCopy[shoeIdx]}`);
    dataCopy[shoeIdx] = updatedItem;
    await shoesApi.put(`/shoesApp/${id}`, updatedItem);
    this.setState({ data: dataCopy });
  };

  handleInput = (objProp, e) => {
    this.setState({ [objProp]: e });
  };
  openUpdateOptions = (id) => {
    return (
      <div>
      <h1>hi</h1>

      {this.handleUpdate(id, this.state.update)}
      </div>
    )

  }

  displayDataFromState = () => {
    const { data } = this.state;
    return data.map((shoe) => {
      return (
        <div key={shoe.id}>
          {console.log(shoe)}
          <ShoeCard 
          Delete={() => {
            this.handleDelete(shoe.id);
          }}
          Update={() => {
            this.openUpdateOptions(shoe.id);
          }}
          name={shoe.name} 
          size={shoe.size} 
          price={shoe.price} />
          <Input onChange={(e) => {
            this.handleInput("update", e.target.value);}}
          label="Update name"/>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Shoe App</h1>
        <Input
          onChange={(e) => {
            this.handleInput("name", e.target.value);
          }}
          label="name"
        />
        <Input
          onChange={(e) => {
            this.handleInput("price", e.target.value);
          }}
          label="price"
        />
        <Input
          onChange={(e) => {
            this.handleInput("size", e.target.value);
          }}
          label="size"
        />
        <button onClick={this.handleCreate}>Create</button>
        {this.displayDataFromState()}
      </div>
    );
  }
}

export default App;