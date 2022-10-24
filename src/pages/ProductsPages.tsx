import React, { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/product";
import { IProduct } from "../model";

export function ProductPage () {
    const {loading, error, products, addProduct} =  useProducts() 
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w=2xl pt-5'>
      { loading && <Loader />}
      { error && <ErrorMessage error={error} /> }
      { products.map((product: IProduct) => <Product product={product} key={product.id} />) }

      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className="fixed top-20 right-2 rounded-full bg-blue-700 text-white text-2xl px-4 py-2"
      onClick={open}
      >+</button>
    </div>
  )
}