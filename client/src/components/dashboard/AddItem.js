import React, { useState } from 'react';
import Axios from 'axios';
import Modal from 'react-modal';

const AddItem = () => {

    /******/
  const [itemName, setItemName] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemDosage, setItemDosage] = useState('');
  const [itemPreparation, setItemPreparation] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  /******/
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMsg, setSuccessModalMsg] = useState('');


    const onSubmitItem = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/items', {
          itemName,
          itemBrand,
          itemCategory,
          itemDosage,
          itemQuantity,
          itemDescription,
          itemPreparation
        }).then(res => {
          if (res.data.status == '1') {
            setSuccessModalMsg(res.data.message);
            setIsSuccessModalOpen(true)
          }
        });
    
        setItemName('');
        setItemBrand('');
        setItemCategory('');
        setItemDosage('');
        setItemQuantity('');
        setItemDescription('');
        setItemPreparation('');
      }
    return (
        <div>
        <form onSubmit={(e) => onSubmitItem(e)}>
        <div className="field">
            <label>Generic Name</label>
            <div className="control">
            <input type="text" required value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </div>
        </div>
        <div className="field">
            <label>Brand</label>
            <div className="control">
            <input type="text" required value={itemBrand} onChange={(e) => setItemBrand(e.target.value)} />
            </div>
        </div>
        <div className="field">
            <label>Category</label>
            <div className="control">
            <input type="text" required value={itemCategory} onChange={(e) => setItemCategory(e.target.value)} />
            </div>
        </div>
        <div className="field">
            <label>Preparation</label>
            <div className="control">
            <input type="text" required value={itemPreparation} onChange={(e) => setItemPreparation(e.target.value)} />
            </div>
        </div>
        <div className="field">
            <label>Dosage</label>
            <div className="control">
            <input type="text" required value={itemDosage} onChange={(e) => setItemDosage(e.target.value)} />
            </div>
        </div>
        <div className="field">
            <label>Quantity</label>
            <div className="control">
            <input type="text" required value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
            </div>
        </div>
        <div className="field">
            <label>Description</label>
            <div className="control">
            <textarea required value={itemDescription} onChange={(e) => setItemDescription(e.target.value)}></textarea>
            </div>
        </div>
        <button>Add Item</button>
        </form>


        <Modal isOpen={isSuccessModalOpen} onRequestClose={() => setIsSuccessModalOpen(false)}>
                <div>
                  <button onClick={() => setIsSuccessModalOpen(false)}>Close</button>
                </div>
                <p>{ successModalMsg }</p>
              </Modal>

        </div>
    )
}

export default AddItem;