import React, { useState } from 'react';

const DynamicForm = () => {
  const [forms, setForms] = useState([{ id: 1, name: '', email: '', phone: '' }]);
  const [submittedForms, setSubmittedForms] = useState([]);

  const handleInputChange = (id, name, value) => {
    const updatedForms = forms.map(form => {
      if (form.id === id) {
        return { ...form, [name]: value };
      }
      return form;
    });
    setForms(updatedForms);
  };

  const addForm = () => {
    const newForm = { id: forms.length + 1, name: '', email: '', phone: '' };
    setForms([...forms, newForm]);
  };

  const deleteForm = id => {
    const updatedForms = forms.filter(form => form.id !== id);
    setForms(updatedForms);
  };

  const handleSubmitAll = () => {
    setSubmittedForms(forms);
    // You can perform additional actions here with the submitted forms data.
    console.log(submittedForms);
  };

  return (
    <div>
      {forms.map(form => (
        <div key={form.id}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => handleInputChange(form.id, 'name', e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => handleInputChange(form.id, 'email', e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={e => handleInputChange(form.id, 'phone', e.target.value)}
          />
          {forms.length > 1 && (
            <button type="button" onClick={() => deleteForm(form.id)}>
              Delete
            </button>
          )}
          <hr />
        </div>
      ))}
      <button type="button" onClick={addForm}>
        Add Form
      </button>
      <button type="button" onClick={handleSubmitAll}>
        Submit All
      </button>
    </div>
  );
};

export default DynamicForm;